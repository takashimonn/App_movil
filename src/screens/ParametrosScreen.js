import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';

const ParametrosScreen = ({ route }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [horseData, setHorseData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchHorseData = async () => {
      const token = await SecureStore.getItemAsync('token');
      try {
        const response = await axios.get(`https://app-movil-lzm2.vercel.app/api/horse/${route.params.caballoId}`, {
          headers: {
            'x-access-token': token
          }
        });
        setHorseData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del caballo:', error);
      }
    };

    fetchHorseData();
  }, [route.params.caballoId]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await SecureStore.getItemAsync('userData');
        const userData = JSON.parse(userDataString);
        setUserData(userData);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleShowInfo = () => {
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

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
    navigation.navigate('Chequeo', { caballoId: horseData ? horseData._id : "", caballoNombre: horseData ? horseData.name : "Nombre del Caballo" });
  };

  const verCheks = () => {
    navigation.navigate('VerCheks', { caballoId: horseData ? horseData._id : "", caballoNombre: horseData ? horseData.name : "Nombre del Caballo" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHorseName}>
          {horseData ? horseData.name : "Cargando..."}
        </Text>
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('InicioStackScreen')}>
          <Ionicons name="arrow-back" size={24} color="#21AEF9" />
        </TouchableOpacity>
      </View>

      <View style={styles.parametrosContainer}>
        <View style={styles.vista1}>
          <Text style={styles.textvista1}>
            Luz Solar
          </Text>
          <View style={styles.iconContainer}>
            <Ionicons name="sunny-outline" size={60} color="orange" />
          </View>
          <View style={styles.info}>
            <Text>aca van los parametros</Text>
          </View>
        </View>

        <View style={styles.vista1}>
          <Text style={styles.textvista1}>
            Pulsos
          </Text>
          <View style={styles.iconContainer}>
            <Ionicons name="pulse" size={60} color="red" />
          </View>
          <View style={styles.info}>
            <Text>aca van los parametros</Text>
          </View>
        </View>

        <View style={styles.vista1}>
          <Text style={styles.textvista1}>
            Velocidad
          </Text>
          <View style={styles.iconContainer}>
            <Ionicons name="speedometer-outline" size={60} color="green" />
          </View>
          <View style={styles.info}>
            <Text>aca van los parametros</Text>
          </View>
        </View>

        <View style={styles.contBtn}>
          <TouchableOpacity
            style={styles.btnInfo}
            onPress={handleShowInfo}
          >
            <Text style={styles.textBtnUbicacion}>Ver Info</Text>
          </TouchableOpacity>

          {userData && (userData.typeUser === 'manager') && (
          <TouchableOpacity
            style={styles.btnInfo}
            onPress={chequeo}
          >
            <Text style={styles.textBtnUbicacion}>Chequeo</Text>
          </TouchableOpacity>
          )}

        {userData && (userData.typeUser === 'admin') && (
          <TouchableOpacity
            style={styles.btnInfo}
            onPress={verCheks}
          >
            <Text style={styles.textBtnUbicacion}> Ver Chequeos</Text>
          </TouchableOpacity>
        )}
        </View>
      </View>

      {showInfo && (
        <View style={styles.overlay}>
          <Image
            source={require('../../assets/horse_alert-removebg-preview.png')} 
            style={styles.horseImage}
            resizeMode="cover"
          />
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
            <TouchableOpacity onPress={handleCloseInfo}>
              <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: 130,
    backgroundColor: '#21AEF9',
    paddingLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textHorseName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginTop: '10%'
  },
  goBackButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  parametrosContainer: {
    marginTop: '5%',
    width: '90%',
    backgroundColor: 'white',
    height: '80%'
  },
  vista1: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    height: '25%',
    borderRadius: 20,
    marginTop: 20,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  textvista1: {
    color: 'black',
    fontSize: 20,
    marginLeft: '7%',
    marginBottom: 10,
    marginTop: '5%'
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: '-5%',
    marginTop: '10%'
  },
  info: {
    backgroundColor: '#E2F2FB',
    width: '40%',
    height: '100%',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  contBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  btnInfo: {
    width: '40%',
    marginTop: '5%',
  },
  textBtnUbicacion: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#21AEF9',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: 'bold',
    fontSize: 18
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
    width: '80%'
  },
  infoText: {
    marginBottom: 10,
    fontSize: 18
  },
  closeText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
  horseImage: {
    width: '20%',
    height: '15%',
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default ParametrosScreen;
