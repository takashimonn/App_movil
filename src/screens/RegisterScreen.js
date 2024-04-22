import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios'; 

const RegisterScreen = () => {
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => setUser({ ...user, [name]: value });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://172.20.97.136:3000/api/user', user);
      console.log(response.data); 
      Alert.alert('Registro exitoso'); 
      
    } catch (error) {
      console.error('Error al registrar:', error);
      Alert.alert('Error al registrar', 'Por favor, inténtalo de nuevo');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contPrin}>
        <View style={styles.formContainer}>
          <Image source={require('../../assets/logo-niño-trans-removebg.png')} style={styles.logo} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={user.username} 
              onChangeText={text => handleChange("username", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={user.name}
              onChangeText={text => handleChange("name", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={user.email}
              onChangeText={text => handleChange("email", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              value={user.password}
              onChangeText={text => handleChange("password", text)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contPrin: {
    backgroundColor: 'green',
    width: '90%',
    alignItems: 'center',
    height: '90%',
    borderRadius: 20,
  },
  formContainer: {
    backgroundColor: '#FFF', 
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    height: '85%',
    marginTop: '15%'
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
    marginTop: '5%'
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'green', 
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginTop: '5%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: '5%'
  }
});

export default RegisterScreen;
