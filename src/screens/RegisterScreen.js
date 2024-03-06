// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


// const RegisterScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.contPrin}>
//         <View style={styles.formContainer}>
//         <Image source={require('../../assets/logo-niño-trans.png')} style={styles.logo} />
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Username:</Text>
//             <TextInput style={styles.input} placeholder="Username" />
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Nombre:</Text>
//             <TextInput style={styles.input} placeholder="Nombre" />
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Email:</Text>
//             <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Contraseña:</Text>
//             <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
//           </View>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Registrar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   contPrin: {
//     backgroundColor: 'green',
//     width: '90%',
//     alignItems: 'center',
//     height: '90%',
//     borderRadius: 20,
//   },
//   formContainer: {
//     backgroundColor: '#FFF', 
//     padding: 20,
//     borderRadius: 20,
//     alignItems: 'center',
//     width: '90%',
//     height: '85%',
//     marginTop: '15%'
//   },

//   inputContainer: {
//     marginBottom: 10,
//     width: '100%',
//     marginTop: '5%'
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     width: '100%',
//   },
//   button: {
//     backgroundColor: 'green', 
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 20,
//     marginTop: '5%'
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginTop: '5%'
//   }
// });

// export default RegisterScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Realiza la solicitud POST al backend para registrar al usuario
    axios.post('http://localhost:3000/register', { // Reemplaza 'http://tu-api.com/register' con la URL de tu backend
      username: username,
      name: name,
      email: email,
      password: password
    })
    .then(response => {
      // Maneja la respuesta del servidor
      console.log(response.data); // Puedes mostrar la respuesta en la consola por ahora
      Alert.alert('Registro exitoso'); // Muestra una alerta de registro exitoso
      // Aquí podrías redirigir al usuario a otra pantalla, iniciar sesión automáticamente, etc.
    })
    .catch(error => {
      // Maneja los errores
      console.error('Error al registrar:', error);
      Alert.alert('Error al registrar', 'Por favor, inténtalo de nuevo'); // Muestra una alerta de error
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contPrin}>
        <View style={styles.formContainer}>
          <Image source={require('../../assets/logo-niño-trans.png')} style={styles.logo} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
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
// 