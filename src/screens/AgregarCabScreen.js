// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const AgregarCabScreen = () => {
//   const [nombre, setNombre] = useState('');
//   const [edad, setEdad] = useState('');
//   const [raza, setRaza] = useState('');
//   const [enfermedades, setEnfermedades] = useState('');

//   const enviarDatos = () => {
//     axios.post('http://172.20.99.75:3000/api/horse', {
//       name: nombre, 
//       age: edad,
//       breed: raza,
//       diseases: enfermedades,
//     })
//     .then(response => {
//       console.log('Caballo agregado:', response.data);
//       Alert.alert('Registro exitoso'); 
//     })
//     .catch(error => {
//       console.error('Error al agregar el caballo:', error);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.circulo}></View>
//       <View style={styles.formulario}>
//         <Text style={styles.label}>Nombre:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Ingrese el nombre"
//           onChangeText={text => setNombre(text)}
//         />
//         <Text style={styles.label}>Edad:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Ingrese la edad"
//           keyboardType="numeric"
//           onChangeText={text => setEdad(text)}
//         />
//         <Text style={styles.label}>Raza:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Ingrese la raza"
//           onChangeText={text => setRaza(text)}
//         />
//         <Text style={styles.label}>Enfermedades:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Ingrese las enfermedades"
//           onChangeText={text => setEnfermedades(text)}
//         />
//       </View>

//       <TouchableOpacity style={styles.botonAgregar} onPress={enviarDatos}>
//         <Text style={styles.textoBoton}>Agregar</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   circulo: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'gray',
//     marginBottom: 20,
  
//   },
//   formulario: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '100%',
//   },
//   botonAgregar: {
//     backgroundColor: '#21AEF9',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   textoBoton: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default AgregarCabScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const AgregarCabScreen = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    // Solicitar permisos para acceder a la galería
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Necesitamos acceso a la galería para seleccionar una imagen.');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const enviarDatos = async () => {
    try {
      if (!imageUri) {
        Alert.alert('Error', 'Por favor, selecciona una imagen.');
        return;
      }

      const nombreImagen = Date.now() + '.jpg';
      const rutaImagen = `${FileSystem.documentDirectory}${nombreImagen}`;

      await FileSystem.moveAsync({
        from: imageUri,
        to: rutaImagen,
      });

      // Enviar datos del caballo y ruta de la imagen al servidor
      const formData = new FormData();
      formData.append('image', {
        uri: rutaImagen,
        type: 'image/jpeg',
        name: nombreImagen,
      });
      formData.append('name', nombre);
      formData.append('age', edad);
      formData.append('breed', raza);
      formData.append('diseases', enfermedades);

      const response = await axios.post('http://192.168.1.6:3000/api/horse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Caballo agregado:', response.data);
      Alert.alert('Registro exitoso');
    } catch (error) {
      console.error('Error al agregar el caballo:', error);
      Alert.alert('Error', 'Ocurrió un error al agregar el caballo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circulo}>
        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 50 }} />}
      </View>
      <TouchableOpacity style={styles.botonAgregar} onPress={pickImage}>
        <Text style={styles.textoBoton}>Seleccionar Imagen</Text>
      </TouchableOpacity>

      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          onChangeText={text => setNombre(text)}
        />
        <Text style={styles.label}>Edad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la edad"
          keyboardType="numeric"
          onChangeText={text => setEdad(text)}
        />
        <Text style={styles.label}>Raza:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la raza"
          onChangeText={text => setRaza(text)}
        />
        <Text style={styles.label}>Enfermedades:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese las enfermedades"
          onChangeText={text => setEnfermedades(text)}
        />
      </View>

      <TouchableOpacity style={styles.botonAgregar} onPress={enviarDatos}>
        <Text style={styles.textoBoton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  formulario: {
    width: '100%',
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
});

export default AgregarCabScreen;
