// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, ScrollView } from 'react-native';
// import axios from 'axios';
// import { Ionicons } from '@expo/vector-icons';
// import * as SecureStore from 'expo-secure-store';

// const AgregarCabScreen = ({ navigation }) => {
//   const [nombre, setNombre] = useState('');
//   const [edad, setEdad] = useState('');
//   const [raza, setRaza] = useState('');
//   const [enfermedades, setEnfermedades] = useState('');
//   const [sensor, setSensor] = useState('');

//   const enviarDatos = async () => {
//     try {
//       const data = {
//         name: nombre,
//         age: edad,
//         breed: raza,
//         diseases: enfermedades,
//         sensor: sensor,
//       };

//       const token = await SecureStore.getItemAsync('token');
  
//       const response = await axios.post('https://app-movil-lzm2.vercel.app/api/horse', data, {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': `${token}`
//         },
//       });
  
//       console.log('Caballo agregado:', response.data);
//       Alert.alert('Registro exitoso'); 
//     } catch (error) {
//       console.error('Error al agregar el caballo:', error);
//       Alert.alert('Error', 'Ocurrió un error al agregar el caballo.');
//     }
//   };

  
  
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../../assets/fondo_azul.jpeg')} style={styles.contBlue}>
//         <View style={styles.headerContent}>
//           <Text style={styles.textContBlue}>Nuevo Caballo</Text>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('InicioStackScreen')}
//             style={styles.addButton}
//           >
//             <Ionicons name="arrow-back-circle-outline" size={50} color="white" />
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>

//       <View style={styles.contWhite}>
//         <ScrollView contentContainerStyle={styles.formulario}>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Nombre:</Text>
//             <View style={styles.input}>
//               <Image source={require('../../assets/horse.png')} style={styles.iconHorse} />
//               <TextInput
//                 placeholder="Ingrese el nombre"
//                 onChangeText={text => setNombre(text)}
//                 style={styles.inputText}
//               />
//             </View>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Edad:</Text>
//             <View style={styles.input}>
//               <Ionicons style={styles.iconInput} name="calendar-outline" size={24} color="black" />
//               <TextInput
//                 placeholder="Ingrese la edad"
//                 keyboardType="numeric"
//                 onChangeText={text => setEdad(text)}
//                 style={styles.inputText}
//               />
//             </View>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Raza:</Text>
//             <View style={styles.input}>
//               <Image source={require('../../assets/type_horse.png')} style={styles.iconHorse} />
//               <TextInput
//                 placeholder="Ingrese la raza"
//                 onChangeText={text => setRaza(text)}
//                 style={styles.inputText}
//               />
//             </View>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Enfermedades:</Text>
//             <View style={styles.input}>
//               <Ionicons style={styles.iconInput} name="bandage-outline" size={24} color="black" />
//               <TextInput
//                 placeholder="Ingrese las enfermedades"
//                 onChangeText={text => setEnfermedades(text)}
//                 style={styles.inputText}
//               />
//             </View>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Sensor:</Text>
//             <View style={styles.input}>
//               <Image source={require('../../assets/type_horse.png')} style={styles.iconHorse} />
//               <TextInput
//                 placeholder="Ingrese el sensor"
//                 onChangeText={text => setSensor(text)}
//                 style={styles.inputText}
//               />
//             </View>
//           </View>
//           <TouchableOpacity style={styles.botonAgregar} onPress={enviarDatos}>
//             <Text style={styles.textoBoton}>Agregar</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   textContBlue: {
//     color: 'white',
//     fontSize: 34,
//     fontWeight: 'bold',
//     marginLeft: '5%',
//   },
//   contBlue: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '60%',
//     zIndex: 1, 
//   },
//   contWhite: {
//     flex: 1,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginTop: '70%',  
//     padding: 20,
//     zIndex: 2,
//   },
//   formulario: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold'
//   },
//   inputContainer: {
//     marginBottom: 20,
//     width: '90%',
//   },
//   input: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//   },
//   inputText: {
//     flex: 1,
//     marginLeft: 10,
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   botonAgregar: {
//     backgroundColor: '#21AEF9',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   textoBoton: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   headerContent: {
//     flexDirection: 'row',        
//     justifyContent: 'space-between', 
//     alignItems: 'center',       
//     paddingHorizontal: '5%',    
//     height: '100%',   
//     marginTop: '-10%'          
//   },
//   iconInput:{
//     marginLeft: 10,
//   },
//   iconHorse: {
//     width: 32,
//     height: 32,
//     marginLeft: 10,
//   }
// });

// export default AgregarCabScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const AgregarCabScreen = ({ navigation, route }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [sensor, setSensor] = useState('');
  const [caballoData, setCaballoData] = useState(route.params?.caballoData || null);

  useEffect(() => {
    if (caballoData) {
      setNombre(caballoData.name);
      setEdad(caballoData.age);
      setRaza(caballoData.breed);
      setEnfermedades(caballoData.diseases);
      setSensor(caballoData.sensor);
    }
  }, [caballoData]);

  const enviarDatos = async () => {
    try {
      const data = {
        name: nombre,
        age: edad,
        breed: raza,
        diseases: enfermedades,
        sensor: sensor,
      };

      const token = await SecureStore.getItemAsync('token');

      const response = await axios.post('https://app-movil-lzm2.vercel.app/api/horse', data, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${token}`
        },
      });

      console.log('Caballo agregado:', response.data);
      Alert.alert('Registro exitoso');
    } catch (error) {
      console.error('Error al agregar el caballo:', error);
      Alert.alert('Error', 'Ocurrió un error al agregar el caballo.');
    }
  };

  const handleUpdateHorse = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.put(`https://app-movil-lzm2.vercel.app/api/horse/${caballoData.id}`, {
        name: nombre,
        age: edad,
        breed: raza,
        diseases: enfermedades,
        sensor: sensor,
      }, {
        headers: {
          'x-access-token': token
        }
      });

      Alert.alert(
        "Actualización exitosa",
        "Los datos del caballo han sido actualizados exitosamente."
      );
    } catch (error) {
      console.error("Error al actualizar el caballo:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondo_azul.jpeg')} style={styles.contBlue}>
        <View style={styles.headerContent}>
          <Text style={styles.textContBlue}>{caballoData ? "Actualizar Caballo" : "Nuevo Caballo"}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('InicioStackScreen')}
            style={styles.addButton}
          >
            <Ionicons name="arrow-back-circle-outline" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.contWhite}>
        <ScrollView contentContainerStyle={styles.formulario}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <View style={styles.input}>
              <Image source={require('../../assets/horse.png')} style={styles.iconHorse} />
              <TextInput
                placeholder="Ingrese el nombre"
                value={nombre}
                onChangeText={text => setNombre(text)}
                style={styles.inputText}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Edad:</Text>
            <View style={styles.input}>
              <Ionicons style={styles.iconInput} name="calendar-outline" size={24} color="black" />
              <TextInput
                placeholder="Ingrese la edad"
                keyboardType="numeric"
                value={edad}
                onChangeText={text => setEdad(text)}
                style={styles.inputText}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Raza:</Text>
            <View style={styles.input}>
              <Image source={require('../../assets/type_horse.png')} style={styles.iconHorse} />
              <TextInput
                placeholder="Ingrese la raza"
                value={raza}
                onChangeText={text => setRaza(text)}
                style={styles.inputText}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enfermedades:</Text>
            <View style={styles.input}>
              <Ionicons style={styles.iconInput} name="bandage-outline" size={24} color="black" />
              <TextInput
                placeholder="Ingrese las enfermedades"
                value={enfermedades}
                onChangeText={text => setEnfermedades(text)}
                style={styles.inputText}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Sensor:</Text>
            <View style={styles.input}>
              <Image source={require('../../assets/type_horse.png')} style={styles.iconHorse} />
              <TextInput
                placeholder="Ingrese el sensor"
                value={sensor}
                onChangeText={text => setSensor(text)}
                style={styles.inputText}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.botonAgregar} onPress={caballoData ? handleUpdateHorse : enviarDatos}>
            <Text style={styles.textoBoton}>{caballoData ? "Actualizar" : "Agregar"}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textContBlue: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  contBlue: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '60%',
    zIndex: 1,
  },
  contWhite: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '70%',
    padding: 20,
    zIndex: 2,
  },
  formulario: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  inputContainer: {
    marginBottom: 20,
    width: '90%',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  botonAgregar: {
    backgroundColor: '#21AEF9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    height: '100%',
    marginTop: '-10%'
  },
  iconInput: {
    marginLeft: 10,
  },
  iconHorse: {
    width: 32,
    height: 32,
    marginLeft: 10,
  }
});

export default AgregarCabScreen;
