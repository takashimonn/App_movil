import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import axios from 'axios';

const VetScreen = () => {
  const [veterinarians, setVeterinarians] = useState([]);
  const [showButtons, setShowButtons] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await axios.get('http://172.20.99.105:3000/api/vets');
        setVeterinarians(response.data);
      } catch (error) {
        console.error("Error al obtener los veterinarios:", error);
      }
    };
    fetchVeterinarians();
  }, []);

  const handleCardPress = (index) => {
    setShowButtons(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const confirmDelete = (vetId) => {
    Alert.alert(
      "Confirmación",
      "¿Estás seguro de que deseas eliminar este veterinario?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "Eliminar", onPress: () => deleteVet(vetId) }
      ]
    );
  };

  const deleteVet = async (vetId) => {
    try {
      await axios.delete(`http://172.20.99.105:3000/api/vets/${vetId}`);
      // Actualizar la lista de veterinarios después de eliminar
      const updatedVets = veterinarians.filter(vet => vet._id !== vetId);
      setVeterinarians(updatedVets);
    } catch (error) {
      console.error("Error al eliminar el veterinario:", error);
    }
  };

  const handleUpdatePress = () => {
    setShowUpdateForm(true);
  };

  const handleChange = (key, value) => {
    setUpdateFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleSubmitUpdate = async () => {
    try {
      const { _id, ...updateData } = updateFormData;
      await axios.put(`http://172.20.99.105:3000/api/vets/${_id}`, updateData);
      // Actualizar la lista de veterinarios después de actualizar
      const response = await axios.get('http://172.20.99.105:3000/api/vets');
      setVeterinarians(response.data);
      setShowUpdateForm(false);
    } catch (error) {
      console.error("Error al actualizar el veterinario:", error);
    }
  };

  return ( 
    <View style={styles.container}>
      {veterinarians.map((vet, index) => (
        <TouchableOpacity
          key={vet._id}
          style={[styles.card, Platform.OS === 'android' && styles.androidShadow]}
          onPress={() => handleCardPress(index)}
        >
          <Text style={styles.text}>{vet.firstName} {vet.lastName}</Text>
          <Text style={styles.text}>Edad: {vet.age}</Text>
          <Text style={styles.text}>Email: {vet.email}</Text>
          <Text style={styles.text}>Teléfono: {vet.phone}</Text>
          {showButtons[index] && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => confirmDelete(vet._id)}>
                <Text style={styles.text_btn}>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={handleUpdatePress}>
                <Text style={styles.text_btn}>Actualizar</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      ))}
      
      {showUpdateForm && (
        <View style={styles.updateFormContainer}>
          <View style={styles.updateForm}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowUpdateForm(false)}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.textUpdate}>Actualización de Veterinarios</Text>
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
            <TouchableOpacity style={styles.updateBoton} onPress={handleSubmitUpdate}>
              <Text style={styles.textoBoton}>Actualizar</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      }
    }),
  },
  androidShadow: {
    elevation: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F92F21',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    marginLeft: 10
  },
  updateButton: {
    backgroundColor: '#21AEF9',
    marginRight: 10
  },
  text_btn: {
    color: 'white',
    fontSize: 18
  },
  updateFormContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  updateForm: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%'
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  updateBoton: {
    backgroundColor: '#21AEF9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textUpdate: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    marginTop: 25
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    marginBottom: 50
  },
});

export default VetScreen;
