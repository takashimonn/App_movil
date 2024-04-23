import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
// Importa SecureStore desde Expo

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

  return (
    <View style={styles.container}>
      <View style={styles.circulo}>
        <Image 
          source={require('../../assets/logo_transparente-removebg-preview.png')}
          style={styles.imagen}
          resizeMode='cover'
        /> 
      </View>
      {userData && (
        <View style={styles.userData}>
          <Text style={styles.label}>Nombre de usuario:</Text>
          <Text style={styles.text}>{userData?.username}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
    overflow: 'hidden',
    marginBottom: 20,
  },
  imagen: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  userData: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PerfilScreen;
