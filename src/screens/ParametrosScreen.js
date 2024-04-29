import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'

const ParametrosScreen = ({ route }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [horseData, setHorseData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [parametros, setParametros] = useState(null);

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
    // Función para obtener los datos de la API
    const fetchParametros = async () => {
      try {
        console.log(parametros)
        const response = await axios.get('https://app-movil-lzm2.vercel.app/api/parameters');
        setParametros(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llama a la función de obtener datos cuando el componente se monta
    fetchParametros();
  }, []);

  const deleteHorse = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      await axios.delete(`https://app-movil-lzm2.vercel.app/api/horse/${route.params.caballoId}`, {
        headers: {
          'x-access-token': token
        }
      });
      navigation.navigate('InicioStackScreen');
    } catch (error) {
      console.error("Error al eliminar el caballo:", error);
    }
  };


  const handleUpdateHorse = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.put(`https://app-movil-lzm2.vercel.app/api/horse/${route.params.caballoId}`, updateHorseData, {
        headers: {
          'x-access-token': token
        }
      });

      setHorseData(response.data);

      Alert.alert(
        "Actualización exitosa",
        "Los datos del caballo han sido actualizados exitosamente."
      );
    } catch (error) {
      console.error("Error al actualizar el caballo:", error);
    }
  };
  const showUpdateForm = () => {
    if (horseData) {
      navigation.navigate('NuevoCab', { caballoData: horseData });
    } else {
      Alert.alert("Error", "No se han encontrado datos del caballo para actualizar.");
    }
  };
  
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
    navigation.navigate('Chequeo', { caballoId: horseData ? horseData.id : null });
  };
  
  const verchequeo = () => {
    navigation.navigate('verCheks', { caballoNombre: horseData ? horseData.name : "Nombre del Caballo" });
  }

  return (
    <View style={styles.container}>
<View style={styles.header}>
  <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('InicioStackScreen')}>
    <Ionicons name="arrow-back" size={24} color="#21AEF9" />
  </TouchableOpacity>
  <View style={styles.headerContent}>
    <Text style={styles.textHorseName}>
      {horseData ? horseData.name : "Cargando..."}
    </Text>

    {userData && (userData.typeUser === 'admin' || userData.typeUser === 'manager' ) && (
      <View style={styles.iconoHeader}>
        <TouchableOpacity style={styles.icono} onPress={deleteHorse}>
          <Ionicons name="trash-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icono} onPress={showUpdateForm}>
          <Feather name="edit" size={30} color="white" />
        </TouchableOpacity>
      </View>
    )}
  </View>
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
            <Text style={styles.textParametros}>Alta</Text>
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
            <Text style={styles.textParametros}>35</Text>
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
            <Text style={styles.textParametros}>35</Text>
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
            onPress={verchequeo}
          >
            <Text style={styles.textBtnUbicacion}>Ver Chequeo</Text>
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
    color: 'white',
    flex: 1, 
    marginLeft: '5%'
  },
  goBackButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
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
  imgEliminar: {
    width: 25,
    height: 25
  },
  headerContent: {
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center', 
  },
  iconoHeader: {
    flexDirection: 'row', 
    marginRight: '5%', 
  },
  icono: {
    marginRight: 25, 
  },
  textParametros: {
    fontSize: 30, 
    fontWeight: 'bold'
  }
});

export default ParametrosScreen;
