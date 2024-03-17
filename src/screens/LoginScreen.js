import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
      <Image source={require('../../assets/granja.jpg')} style={styles.logo} />
      <Text style={styles.texto}> Inicia Sesión </Text>
      <View style={styles.containerBlue}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Nombre de usuario" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#000" secureTextEntry />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿Aún no tienes una cuenta?</Text>
          <Text style={styles.link} onPress={handleRegister}>Registrarse</Text>
        </View>
      </View>
      <Text style={styles.textRegistro}> O inicia sesión con tus redes sociales </Text>
      <View style={styles.contRegistro}>
        <TouchableOpacity style={styles.buttonRegistro} onPress={handleRegister}>
          <Image source={require('../../assets/google.png')} style={styles.imagenRegistro}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegistro} onPress={handleRegister}>
          <Image source={require('../../assets/facebook.png')} style={styles.imagenRegistro}/>
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
    backgroundColor: '#FFF',
  },
  containerBlue: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 30,
  },
  texto: {
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Pacifico', 
  },
  form: {
    width: '90%',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5D62D5',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  textRegistro: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#5D62D5',
  },
  link: {
    color: '#5D62D5',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  buttonRegistro: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: '#9393A7',
    borderRadius: 5,
    marginRight: 20, 
    marginLeft: 20
  },
  imagenRegistro: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contRegistro: {
    flexDirection: 'row', 
    marginTop: 40, 
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  registerText: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
