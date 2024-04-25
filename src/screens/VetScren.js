import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert, TextInput, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign'; 
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const VetScreen = ({navigation}) => {
  const [veterinarians, setVeterinarians] = useState([]);
  const [showButtons, setShowButtons] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: ""
  });

  const fetchVeterinarians = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.get('https://app-movil-lzm2.vercel.app/api/vets', {
        headers: {
          'x-access-token': `${token}`
      }
      }) ;
      setVeterinarians(response.data);
    } catch (error) {
      console.error("Error al obtener los veterinarios:", error);
    }
  };

  useEffect(() => {
    
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
      const token = await SecureStore.getItemAsync('token');
      await axios.delete(`https://app-movil-lzm2.vercel.app/api/vets/${vetId}`, {
        headers: {
          'x-access-token': `${token}`
      }
      });
      const updatedVets = veterinarians.filter(vet => vet._id !== vetId);
      setVeterinarians(updatedVets);
    } catch (error) {
      console.error("Error al eliminar el veterinario:", error);
    }
  };

  const handleUpdatePress = (vet) => {
    setUpdateFormData({
      _id: vet._id,
      firstName: vet.firstName || "",
      lastName: vet.lastName || "",
      age: vet.age ? vet.age.toString() : "",
      email: vet.email || "",
      phone: vet.phone ? vet.phone.toString() : ""
    });
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
      const token = await SecureStore.getItemAsync('token');
      const { _id, ...updateData } = updateFormData;
      await axios.put(`https://app-movil-lzm2.vercel.app/api/vets/${_id}`, updateData, {
        headers: {
          'x-access-token': `${token}`
      }
      });
      
      const response = await axios.get('https://app-movil-lzm2.vercel.app/api/vets', {
        headers: {
          'x-access-token': `${token}`
      }
      });
      setVeterinarians(response.data);

      Alert.alert(
        "Actualización exitosa",
        "Los datos del veterinario han sido actualizados exitosamente."
      );

      setShowUpdateForm(false);
    } catch (error) {
      console.error("Error al actualizar el veterinario:", error);
    }
  };


  fetchVeterinarians();

  return ( 
    <View style={styles.container}>
      <View style={styles.ContBlue}>
      <View style={styles.headerContent}>
        <Text style={styles.textContBlue}>
          Veterinarios 
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('NewVets')}  // <-- Cambio aquí
            style={styles.addButton}
          > 
          <Ionicons name="add" size={30} color="#21AEF9" />
        </TouchableOpacity>
      </View>
      </View>

      <ScrollView style={styles.scrollView}>
      <View style={styles.contTarjetas}>
      {/* {veterinarians.map((vet, index) => (
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
              <TouchableOpacity 
                style={[styles.button, styles.updateButton]} 
                onPress={() => handleUpdatePress(vet)}>
                  <Text style={styles.text_btn}>Actualizar</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      ))} */}
      {veterinarians.map((vet, index) => (
  <TouchableOpacity
    key={vet._id}
    style={[styles.card, Platform.OS === 'android' && styles.androidShadow]}
    onPress={() => handleCardPress(index)}
  >
    <View style={styles.infoContainer}>
      <Ionicons name="person-outline" size={16} color="black" style={styles.icon} />
      <Text style={styles.text}>{vet.firstName} {vet.lastName}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Ionicons name="mail-outline" size={16} color="black" style={styles.icon} />
      <Text style={styles.text}>Email: {vet.email}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Ionicons name="call-outline" size={16} color="black" style={styles.icon} />
      <Text style={styles.text}>Teléfono: {vet.phone}</Text>
    </View>
    {showButtons[index] && (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => confirmDelete(vet._id)}>
          <Text style={styles.text_btn}>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.updateButton]} 
          onPress={() => handleUpdatePress(vet)}>
            <Text style={styles.text_btn}>Actualizar</Text>
        </TouchableOpacity>
      </View>
    )}
  </TouchableOpacity>
))}

        
      </View>
      </ScrollView>


      
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
              value={updateFormData.firstName}
            />
            <Text style={styles.label}>Apellido:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el apellido"
              onChangeText={text => handleChange("lastName", text)}
              value={updateFormData.lastName}
            />
            <Text style={styles.label}>Edad:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese la edad"
              onChangeText={text => handleChange("age", text)}
              value={updateFormData.age}
            />
            <Text style={styles.label}>Correo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el correo"
              onChangeText={text => handleChange("email", text)}
              value={updateFormData.email}
            />
            <Text style={styles.label}>Telefono:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el Telefono"
              onChangeText={text => handleChange("phone", text)}
              value={updateFormData.phone}
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
    alignItems: 'center',
    backgroundColor: 'white'
  },
  ContBlue: {
    width: '100%',
    backgroundColor: '#21AEF9',
    height: '20%',
    justifyContent:'center',
  },

  textContBlue:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '5%',
    marginTop: '15%',
  },

  headerContent: {
    flexDirection: 'row',        
    justifyContent: 'space-between', 
    alignItems: 'center',       
    paddingHorizontal: '5%',    
    height: '100%',             
  },
  
  addButton:{
    backgroundColor:'white',
    width: 50,             
    height: 50,             
    borderRadius: 25,     
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'10%',
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },

  contTarjetas:{
    marginTop: '10%',
    alignItems: 'center'
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: '7%',
    width: '95%',
    marginLeft: '1%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
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

  scrollView: {
    width: '90%',  
    marginBottom: 20 
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
    
  icon: {
    marginRight: 10,
  },

});

export default VetScreen;