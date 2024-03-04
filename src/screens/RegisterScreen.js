import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contPrin}>
        <View style={styles.formContainer}>
        <Image source={require('../../assets/logo-niño-trans.png')} style={styles.logo} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput style={styles.input} placeholder="Username" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput style={styles.input} placeholder="Nombre" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
          </View>
          <TouchableOpacity style={styles.button}>
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
