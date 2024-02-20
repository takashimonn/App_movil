import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AgregarCabScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circulo}></View>
      <View style={styles.formulario}>
        
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
        />
        <Text style={styles.label}>Edad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la edad"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Raza:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la raza"
        />
        <Text style={styles.label}>Enfermedades:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
        />
      </View>

      <TouchableOpacity style={styles.botonAgregar}>
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

export default AgregarCabScreen;
