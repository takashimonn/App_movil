import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const AgregarCabScreen = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');
  const [enfermedades, setEnfermedades] = useState('');

  const enviarDatos = () => {
    axios.post('http://172.20.99.75:3000/api/horse', {
      name: nombre, 
      age: edad,
      breed: raza,
      diseases: enfermedades,
    })
    .then(response => {
      console.log('Caballo agregado:', response.data);
      Alert.alert('Registro exitoso'); 
    })
    .catch(error => {
      console.error('Error al agregar el caballo:', error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.circulo}></View>
      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          onChangeText={text => setNombre(text)}
        />
        <Text style={styles.label}>Edad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la edad"
          keyboardType="numeric"
          onChangeText={text => setEdad(text)}
        />
        <Text style={styles.label}>Raza:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la raza"
          onChangeText={text => setRaza(text)}
        />
        <Text style={styles.label}>Enfermedades:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          onChangeText={text => setEnfermedades(text)}
        />
      </View>

      <TouchableOpacity style={styles.botonAgregar} onPress={enviarDatos}>
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
    backgroundColor: '#21AEF9',
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

export default AgregarCabScreen;
