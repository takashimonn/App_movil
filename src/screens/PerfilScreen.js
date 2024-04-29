import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';


const PerfilScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obtener los datos guardados de SecureStore
        const storedData = await SecureStore.getItemAsync('userData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('userData');
      navigation.navigate('Login');
      setUserData(null);

    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}> 
        <View style={styles.contWhite}>
          <View style={styles.circulo}>
            <Image 
              source={require('../../assets/perfil.png')}
              style={styles.imagen}
              resizeMode='cover'
            /> 
          </View>
          {userData && (
            <View style={styles.userData}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre de usuario:</Text>
                <View style={styles.input}> 
                  <Ionicons style={styles.iconInput} name="happy-outline" size={24} color="black" />
                  <Text style={styles.inputText}>{userData?.username}</Text>
                </View> 
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre:</Text>
                <View style={styles.input}> 
                  <Ionicons style={styles.iconInput} name="person-outline" size={24} color="black" />
                  <Text style={styles.inputText}>{userData.name}</Text>
                </View> 
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Correo:</Text>
                <View style={styles.input}> 
                  <Ionicons style={styles.iconInput} name="mail-outline" size={24} color="black" />
                  <Text style={styles.inputText}>{userData.email}</Text>
                </View> 
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Tipo de Usuario:</Text>
                <View style={styles.input}> 
                  <Ionicons style={styles.iconInput} name="finger-print-outline" size={24} color="black" />
                  <Text style={styles.inputText}>{userData.typeUser}</Text>
                </View> 
              </View>
            </View>
          )}

          <View style={styles.contBtn}>
            <TouchableOpacity style={styles.btnInfo} onPress={handleLogout}>
              <Text style={styles.textBtn}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: '10%',
    marginTop:'10%'
  },
  contWhite:{
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '20%',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    marginBottom: 10,
    width: '90%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    width: '90%'
  },
  iconInput:{
    marginLeft: 10,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  contBtn: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: 20,
    width: '100%',
  },
  btnInfo: {
    width: '40%',
    marginTop: '5%',
  },
  textBtn: {
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
  userData: {
    alignItems: 'center',
  },
  contBlue: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PerfilScreen;

  
       
