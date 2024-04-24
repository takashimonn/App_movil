import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
const NewVetsScreen = () => {
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
      console.log(response.data); 
      Alert.alert('Registro exitoso');

    } catch (error) {
      console.error('Error al registrar:', error);
      Alert.alert('Error al registrar', 'Por favor, inténtalo de nuevo');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          onChangeText={text => handleChange("firstName", text)}
        />
        <Text style={styles.label}>Apellido:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el apellido"
          onChangeText={text => handleChange("lastName", text)}
        />
        <Text style={styles.label}>Edad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la edad"
          onChangeText={text => handleChange("age", text)}
        />
        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el correo"
          onChangeText={text => handleChange("email", text)}
        />
        <Text style={styles.label}>Telefono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el Telefono"
          onChangeText={text => handleChange("phone", text)}
        />
      </View>
      <TouchableOpacity style={styles.botonAgregar} onPress={handleRegister}>
        <Text style={styles.textoBoton}>Agregar</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  
  },
  formulario: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  botonAgregar: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewVetsScreen