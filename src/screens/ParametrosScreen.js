import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const ParametrosScreen = ({ route }) => {
  const navigation = useNavigation();
  const [horseData, setHorseData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchHorseData = async () => {
      const token = await SecureStore.getItemAsync('token');
      try {
        const response = await axios.get(`https://app-movil-lzm2.vercel.app/api/horse/${route.params.caballoId}`, {
          headers: {
            'x-access-token': `${token}`
        }
        });
        setHorseData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del caballo:', error);
      }
    };

    fetchHorseData();
  }, [route.params.caballoId]);

  const handleShowInfo = () => {
    setShowInfo(true);
  }

  const handleCloseInfo = () => {
    setShowInfo(false);
  }

  const showDataAlert = () => {
    Alert.alert(
      "Información del Caballo",
      `Nombre: ${horseData.name}\nEdad: ${horseData.age}\nRaza: ${horseData.breed}\nEnfermedades: ${horseData.diseases}\nUsuario: ${horseData.user}`,
      [
        {
          text: "Cerrar",
          onPress: handleCloseInfo,
        },
      ],
      { cancelable: false }
    );
  };


  const chequeo = () => {
    navigation.navigate('Chequeo', { caballoNombre: horseData ? horseData.name : "Nombre del Caballo" });

  };
  

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/caballo.jpg')}
        style={styles.imgPrincipalParametros}
      />
      <Text style={styles.textHorseName}>
        {horseData ? horseData.name : "Cargando..."}
      </Text>

      <View style={styles.parametrosContainer}>
        <View style={styles.parametro}>
          <Image
            source={require('../../assets/ritmo-cardiaco.png')}
            style={styles.imgParametros}
          />
          <Text style={styles.textParametros}>
            Presión
          </Text>
        </View>

        <View style={styles.parametro}>
          <Image
            source={require('../../assets/termometro.png')}
            style={styles.imgParametros}
          />
          <Text style={styles.textParametros}>
            Temperatura
          </Text>
        </View>

        <View style={styles.parametro}>
          <Image
            source={require('../../assets/presion-arterial.png')}
            style={styles.imgParametros}
          />
          <Text style={styles.textParametros}>
            Presión Arterial
          </Text>
        </View>

        <TouchableOpacity
            style={styles.btnUbicacion}
            onPress={handleShowInfo}
        >
            <Text style={styles.textBtnUbicacion}>Ver Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
                        style={styles.btnUbicacion}
                        onPress={chequeo}
                    >
                        <Text style={styles.textBtnUbicacion}>Chequeo</Text>
                    </TouchableOpacity>
      </View>

      {showInfo && (
          <View style={styles.overlay}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                Nombre: {horseData.name}
              </Text>
              <Text style={styles.infoText}>
                Edad: {horseData.age}
              </Text>
              <Text style={styles.infoText}>
                Raza: {horseData.breed}
              </Text>
              <Text style={styles.infoText}>
                Enfermedades: {horseData.diseases}
              </Text>
              <Text style={styles.infoText}>
                Usuario: {horseData.user}
              </Text>
              <TouchableOpacity onPress={handleCloseInfo}>
                <Text style={styles.closeText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      <View style={styles.snackBar}>
        <Text style={styles.textSnackBar}>
            Caballo Estable
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgPrincipalParametros: {
    width: '100%',
    height: '30%',
  },

  textHorseName: {
    marginTop: '8%',
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    left: '5%',
  },

  parametrosContainer: {
    width: '100%',
    marginTop: '10%',
  },

  parametro: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
  },

  imgParametros: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },

  textParametros: {
    fontSize: 20,
    marginLeft: 30,
  },

  btnUbicacion: {
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
  },

  textBtnUbicacion: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50, 
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '70%'
  },

  infoText: {
    marginBottom: 10,
  },

  closeText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },

  snackBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textSnackBar: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  }

});

export default ParametrosScreen;
