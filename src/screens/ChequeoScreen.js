import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';

const ChequeoScreen = ({ route }) => {
  const { nombreCaballo } = route.params;

  // const [nombre, setNombre] = useState('');
  const [medicinasSeleccionadas, setMedicinasSeleccionadas] = useState([]);
  const [especificaciones, setEspecificaciones] = useState('');
  const [alimento, setAlimento] = useState('');
  const [herraje, setHerraje] = useState('');
  const [job, setJob] = useState('');

  const handleCheckboxChange = (medicina) => {
    const index = medicinasSeleccionadas.indexOf(medicina);
    if (index === -1) {
      setMedicinasSeleccionadas([...medicinasSeleccionadas, medicina]);
    } else {
      const updatedMedicinas = [...medicinasSeleccionadas];
      updatedMedicinas.splice(index, 1);
      setMedicinasSeleccionadas(updatedMedicinas);
    }
  };

  // const handleSubmit = () => {
  //   axios.post('http://192.168.1.13:3000/api/checks',{
  //     namehorse: nombreCaballo,
  //     medicines: medicinasSeleccionadas.join(', '), // Convertir el array de medicinas a una cadena separada por comas
  //     specifications: especificaciones,
  //     food: alimento,
  //     horseshoes: herraje,
  //     job: job
  //   })
  //   .then(response => {
  //     console.log('Caballo agregado:', response.data);
  //     Alert.alert('Registro exitoso'); 
  //   })
  //   .catch(error => {
  //     console.error('Error al agregar el caballo:', error);
  //   });
  // };
  const handleSubmit = () => {
    // Verificar si nombreCaballo tiene un valor
    if (!nombreCaballo || nombreCaballo.trim() === '') {
      Alert.alert('Error', 'El nombre del caballo es requerido');
      return;
    }
  
    axios.post('http://192.168.1.13:3000/api/checks',{
      namehorse: nombreCaballo,
      medicines: medicinasSeleccionadas.join(', '), // Convertir el array de medicinas a una cadena separada por comas
      specifications: especificaciones,
      food: alimento,
      horseshoes: herraje,
      job: job
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
      <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Chequeo para {nombreCaballo}</Text>

        <View style={styles.formulario}>
          {/* <Text>1.- Ingresa el Nombre del caballo correpondiente</Text>

          <Text style={styles.label}>Nombre del caballo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre"
            onChangeText={text => setNombre(text)}
          /> */}

          <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text>

          <Text style={styles.label}>Medicinas:</Text>
          <View style={styles.checkContainer}>
            <CheckBox
              title='Desparacitación'
              checked={medicinasSeleccionadas.includes('Desparacitación')}
              onPress={() => handleCheckboxChange('Desparacitación')}
            />
            <CheckBox
              title='Vacunas'
              checked={medicinasSeleccionadas.includes('Vacunas')}
              onPress={() => handleCheckboxChange('Vacunas')}
            />
            <CheckBox
              title='Suero'
              checked={medicinasSeleccionadas.includes('Suero')}
              onPress={() => handleCheckboxChange('Suero')}
            />
            <CheckBox
              title='Vitaminas'
              checked={medicinasSeleccionadas.includes('Vitaminas')}
              onPress={() => handleCheckboxChange('Vitaminas')}
            />
            <CheckBox
              title='Complejos'
              checked={medicinasSeleccionadas.includes('Complejos')}
              onPress={() => handleCheckboxChange('Complejos')}
            />
            <CheckBox
              title='Colicos'
              checked={medicinasSeleccionadas.includes('Colicos')}
              onPress={() => handleCheckboxChange('Colicos')}
            />
          </View>

          <Text style={styles.label}>Especificaciones de Medicamentos</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese las especificaciones"
            onChangeText={text => setEspecificaciones(text)}
          />

          <Text>3.- Especifica los siguientes parametros señalados</Text>

          <Text style={styles.label}>Cantidad de Alimento:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de alimento"
            onChangeText={text => setAlimento(text)}
          />
    
          <Text style={styles.label}>Desgaste de Herraje:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el desgaste de herraje"
            onChangeText={text => setHerraje(text)}
          />
          
          <Text style={styles.label}>Horas de trabajo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese las horas de trabajo"
            onChangeText={text => setJob(text)}
          />

          <TouchableOpacity style={styles.botonAgregar} onPress={handleSubmit}>
            <Text style={styles.textoBoton}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  scrollView: {
    width: '100%',
  },
  formulario: {
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
  checkContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
  
});

export default ChequeoScreen;

