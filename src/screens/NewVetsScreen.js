import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';

const NewVetsScreen = ({navigation}) => {
  const [vet, setVet] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (name, value) => setVet({ ...vet, [name]: value });

  const handleRegister = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.post('https://app-movil-lzm2.vercel.app/api/vets', vet, {
        headers: {
          'x-access-token': `${token}`
      }
      });
      navigation.navigate('vets')
      console.log(response.data); 
      Alert.alert('Registro exitoso');

    } catch (error) {
     
      console.error('Error al registrar:', error);
      Alert.alert('Error al registrar', 'Por favor, inténtalo de nuevo');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondo_azul.jpeg')} style={styles.contBlue}>
        <View style={styles.headerContent}>
          <Text style={styles.textContBlue}>Nuevo Veterinario</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('vets')}
            style={styles.addButton}
          >
            <Ionicons name="arrow-back-circle-outline" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.contWhite}>
        <View style={styles.formulario}>
          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Nombre:</Text>
              <View style={styles.input}>
                <Ionicons style={styles.iconInput} name="person-outline" size={24} color="black" />
                    <TextInput
                      style={styles.inputText}
                      placeholder="Ingrese el nombre"
                      onChangeText={text => handleChange("firstName", text)}
                    />
              </View>
            </View>
       
          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Apellido:</Text>
              <View style={styles.input}>
                <Ionicons style={styles.iconInput} name="person-outline" size={24} color="black" />
                  <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese el apellido"
                    onChangeText={text => handleChange("lastName", text)}
                  />
            </View>
          </View>

          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Edad:</Text>
              <View style={styles.input}>
                <Ionicons style={styles.iconInput} name="today-outline" size={24} color="black" />
                  <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese la Edad"
                    onChangeText={text => handleChange("age", text)}
                  />
            </View>
          </View>

          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Correo:</Text>
              <View style={styles.input}>
                <Ionicons style={styles.iconInput} name="mail-outline" size={24} color="black" />
                  <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese el Correo"
                    onChangeText={text => handleChange("email", text)}
                  />
            </View>
          </View>

          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Teléfono:</Text>
              <View style={styles.input}>
                <Ionicons style={styles.iconInput} name="call-outline" size={24} color="black" />
                  <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese el Teléfono"
                    onChangeText={text => handleChange("phone", text)}
                  />
            </View>
          </View>
        </View>
          <TouchableOpacity style={styles.botonAgregar} onPress={handleRegister}>
            <Text style={styles.textoBoton}>Agregar</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contWhite: {
    position: 'absolute', 
    top: '30%', 
    width: '100%',
    height: '80%', 
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 2, 
    alignItems: 'center'
  },
  formulario: {
    width: '90%',
    marginBottom: 20,
    marginTop: '10%',
    alignItems: 'center'
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
  iconInput:{
    marginLeft: 10,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  textContBlue: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  contBlue: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '60%',
    zIndex: 1, 
  },
  headerContent: {
    flexDirection: 'row',        
    justifyContent: 'space-between', 
    alignItems: 'center',       
    paddingHorizontal: '5%',    
    height: '100%',   
    marginTop: '-10%'          
  },
  botonAgregar: {
    backgroundColor: '#21AEF9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewVetsScreen