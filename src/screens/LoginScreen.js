import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import RegisterScreen from './RegisterScreen';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('DrawerNavigation'); 
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@</Text>
      <View style={styles.cajaLogo}>
        <Image source={require('../../assets/logo-niño-trans.png')} style={styles.logo} />
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nombre de usuario" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>¿Aún no tienes una cuenta?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerLink}>Regístrate</Text>
        </TouchableOpacity>
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
  form: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: 350,
    height: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '90%',
    marginTop: 20,
    height: 60,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  registerText: {
    marginTop: 50,
  },
  registerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  cajaLogo: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default LoginScreen;
