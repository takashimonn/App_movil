// Login con logo blanco y boton azul 
// import React, { useState } from 'react';
// import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     navigation.navigate('TabNavigation');
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground 
//         source={require('../../assets/caballo_login.jpg')} 
//         style={styles.background}
//         opacity={0.8}
//         blurRadius={5}
//       >
//         <View style={styles.content}>
//           <Image source={require('../../assets/logo_blanco_trans.png')} style={styles.logo} />
//           <View style={styles.containerInput}>
//             <View style={styles.form}>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={24} color="#FFF" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Nombre de usuario"
//                   placeholderTextColor="#FFF"
//                   onChangeText={setUsername}
//                   value={username}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#FFF" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contraseña"
//                   placeholderTextColor="#FFF"
//                   secureTextEntry
//                   onChangeText={setPassword}
//                   value={password}
//                 />
//               </View>
//               <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                 <Text style={styles.buttonText}>Continuar</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({ 
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   logo: {
//     width: 200,
//     height: 170,
//     marginBottom: 120,
//     marginTop: 180,
//   },
//   containerInput: {
//     width: '90%',
//     backgroundColor: 'transparent',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 30,
//   },
//   form: {
//     width: '100%',
//     marginTop: 10,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: '#FFF',
//     borderRadius: 25,
//     padding: 10,
//     paddingLeft: 40, 
//     color: '#FFF',
//     fontSize: 18, 
//   },
//   icon: {
//     position: 'absolute', 
//     top: 15,
//     left: 15,
//   },
//   button: {
//     backgroundColor: '#21AEF9',
//     padding: 10,
//     borderRadius: 25,
//     width: '100%',
//     height: 50,
//     alignItems: 'center',
//     marginTop: 10,
//     justifyContent: 'center',
//     borderWidth: 2,
//     borderColor: '#21AEF9',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default LoginScreen;

// Login con logo azul y boton blanco

import React, { useContext, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const val = useContext(AuthContext);

  const handleLogin = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/caballo_login.jpg')} 
        style={styles.background}
        opacity={0.8}
        blurRadius={5}
      >
        <View style={styles.content}>
          <Image source={require('../../assets/logo_azul-removebg-preview.png')} style={styles.logo} />
          <View style={styles.containerInput}>
            <Text>{val}</Text>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Icon name="user" size={24} color="#FFF" style={styles.icon} />

                <TextInput
                  style={styles.input}
                  placeholder="Nombre de usuario"
                  placeholderTextColor="#FFF"
                  onChangeText={text => setEmail(text)}
                  value={email}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#FFF" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#FFF"
                  secureTextEntry
                  onChangeText={text => setPassword(text)}
                  value={password}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 170,
    marginBottom: 120,
    marginTop: 180,
  },
  containerInput: {
    width: '90%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 30,
  },
  form: {
    width: '100%',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 25,
    padding: 10,
    paddingLeft: 40, 
    color: '#FFF',
    fontSize: 18, 
  },
  icon: {
    position: 'absolute', 
    top: 15,
    left: 15,
  },
  button: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  buttonText: {
    color: '#21AEF9',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;