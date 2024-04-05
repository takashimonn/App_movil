import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

function ChequeoScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.formulario}>
        <Text style={styles.label}>Desparacitacion:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          // onChangeText={text => setNombre(text)}
        />
        <Text style={styles.label}>Vacunas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la edad"
          keyboardType="numeric"
          // onChangeText={text => setEdad(text)}
        />
        <Text style={styles.label}>Suero:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la raza"
          // onChangeText={text => setRaza(text)}
        />
        <Text style={styles.label}>Herraje:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          // onChangeText={text => setEnfermedades(text)}
        />
        <Text style={styles.label}>Vitaminas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          // onChangeText={text => setEnfermedades(text)}
        />
        <Text style={styles.label}>Colicos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          // onChangeText={text => setEnfermedades(text)}
        />
        <Text style={styles.label}>Complejos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          // onChangeText={text => setEnfermedades(text)}
        />
        <Text style={styles.label}>Tiempo de Trabajo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          // onChangeText={text => setEnfermedades(text)}
        />
        <Text style={styles.label}>Cantidad de Alimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          // onChangeText={text => setEnfermedades(text)}
        />

<TouchableOpacity style={styles.botonAgregar}>
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

export default ChequeoScreen;