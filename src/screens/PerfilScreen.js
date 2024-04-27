// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
// import axios from 'axios';
// import { Ionicons } from '@expo/vector-icons';


// const PerfilScreen = ({ navigation }) => {
//   const [userData, setUserData] = useState('null');
//   const [updateFormData, setUpdateFormData] = useState({
//     _id: '',
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [showUpdateForm, setShowUpdateForm] = useState(false);
  
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Obtener los datos guardados de SecureStore
//         const storedData = await SecureStore.getItemAsync('userData');
//         if (storedData) {
//           const parsedData = JSON.parse(storedData);
//           setUserData(parsedData);
//         } else {
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error("Error al obtener los datos del usuario:", error);
//       }
//     };
//     fetchUserData();
//   }, []);







//   const handleLogout = async () => {
//     try {
//       await SecureStore.deleteItemAsync('userData');
//       navigation.navigate('Login');
//       setUserData(null);
//     } catch (error) {
//       console.error("Error al cerrar sesión:", error);
//     }
//   };


//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}> 
//         <View style={styles.contWhite}>
//           <View style={styles.circulo}>
//             <Image 
//               source={require('../../assets/perfil.png')}
//               style={styles.imagen}
//               resizeMode='cover'
//             /> 
//           </View>
//           {userData && (
//             <View style={styles.userData}>
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Nombre de usuario:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="happy-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData?.username}
//                       </TextInput>
//                   </View> 
//               </View>
              
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Nombre:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="person-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData.name}
//                       </TextInput>
//                   </View> 
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Correo:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="mail-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData.email}
//                       </TextInput>
//                   </View> 
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Tipo de Usuario:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="finger-print-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData.typeUser}
//                       </TextInput>
//                   </View> 
//               </View>
//             </View>
//           )}

//           <View style={styles.contBtn}>
//             <TouchableOpacity
//               style={styles.btnInfo}
//               // onPress={() => handleUpdatePress(userData)}
//             >
//               <Text style={styles.textBtn}>Actualizar</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.btnInfo}
//               onPress={handleLogout}
//             >
//               <Text style={styles.textBtn}>Cerrar Sesión</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ImageBackground>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   circulo: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'white',
//     overflow: 'hidden',
//     marginBottom: '10%',
//     marginTop:'10%'
//   },
//   contWhite:{
//     width: '90%',
//     height: '80%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginTop: '20%',
//     elevation: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     margin: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imagen: {
//     width: '100%',
//     height: '100%',
//   },
//   inputContainer: {
//     marginBottom: 10,
//     width: '90%',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold'
//   },
//   input: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 10,
//     width: '90%'
//   },
//   iconInput:{
//     marginLeft: 10,
//   },
//   inputText: {
//     flex: 1,
//     marginLeft: 10,
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   contBtn: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', 
//     marginTop: 20,
//     width: '80%',
//   },
//   btnInfo: {
//     width: '30%', 
//     marginTop: '5%',
//     marginRight: '18%',
//     // marginLeft: '5%'
//   },
//   textBtn: {
//     width: 150,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#21AEF9',
//     color: 'white',
//     textAlign: 'center',
//     lineHeight: 50, 
//     fontWeight: 'bold',
//     fontSize: 18
//   },
//   userData: {
//     alignItems: 'center',
//   },
//   contBlue: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1, 
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
// });

// export default PerfilScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
// import axios from 'axios';
// import { Ionicons } from '@expo/vector-icons';

// const PerfilScreen = ({ navigation }) => {
//   const [userData, setUserData] = useState('null');
//   const [updateFormData, setUpdateFormData] = useState({
//     _id: '',
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [showUpdateForm, setShowUpdateForm] = useState(false);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedData = await SecureStore.getItemAsync('userData');
//         if (storedData) {
//           const parsedData = JSON.parse(storedData);
//           setUserData(parsedData);
//         } else {
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error("Error al obtener los datos del usuario:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleUpdatePress = () => {
//     setShowUpdateForm(true);
//   };

//   const handleChange = (key, value) => {
//     setUpdateFormData(prevData => ({
//       ...prevData,
//       [key]: value
//     }));
//   };

//   const handleSubmitUpdate = async () => {
//     try {
//       const token = await SecureStore.getItemAsync('token');
//       const { _id, ...updateData } = updateFormData;
//       await axios.put(`https://tu-direccion-api/user/${_id}`, updateData, {
//         headers: {
//           'x-access-token': token
//         }
//       });
  
//       // Opcional: puedes hacer una nueva solicitud para obtener los datos actualizados del usuario
//       const response = await axios.get(`https://tu-direccion-api/user/${_id}`, {
//         headers: {
//           'x-access-token': token
//         }
//       });
  
//       // Actualizar el estado del usuario con los datos recién obtenidos
//       setUserData(response.data);
  
//       // Opcional: mostrar un mensaje de éxito
//       Alert.alert(
//         "Actualización exitosa",
//         "Los datos del usuario han sido actualizados exitosamente."
//       );
  
//       // Ocultar el formulario de actualización
//       setShowUpdateForm(false);
//     } catch (error) {
//       console.error("Error al actualizar el usuario:", error);
//     }
//   };
  

//   const handleLogout = async () => {
//     try {
//       await SecureStore.deleteItemAsync('userData');
//       navigation.navigate('Login');
//       setUserData(null);
//     } catch (error) {
//       console.error("Error al cerrar sesión:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}> 
//         <View style={styles.contWhite}>
//           <View style={styles.circulo}>
//             <Image 
//               source={require('../../assets/perfil.png')}
//               style={styles.imagen}
//               resizeMode='cover'
//             /> 
//           </View>
//           {userData && (
//             <View style={styles.userData}>
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Nombre de usuario:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="happy-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData?.username}
//                       </TextInput>
//                   </View> 
//               </View>
              
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Nombre:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="person-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData.name}
//                       </TextInput>
//                   </View> 
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Correo:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="mail-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData.email}
//                       </TextInput>
//                   </View> 
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Tipo de Usuario:</Text>
//                   <View style={styles.input}> 
//                     <Ionicons style={styles.iconInput} name="finger-print-outline" size={24} color="black" />
//                       <TextInput style={styles.inputText}>
//                         {userData.typeUser}
//                       </TextInput>
//                   </View> 
//               </View>
//             </View>
//           )}

//           <View style={styles.contBtn}>
//             <TouchableOpacity
//               style={styles.btnInfo}
//               onPress={() => handleUpdatePress()} 
//             >
//               <Text style={styles.textBtn}>Actualizar</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.btnInfo}
//               onPress={handleLogout}
//             >
//               <Text style={styles.textBtn}>Cerrar Sesión</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ImageBackground>

//       {showUpdateForm && (
//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Nombre de usuario"
//             value={updateFormData.username}
//             onChangeText={text => handleChange("username", text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Nombre"
//             value={updateFormData.name}
//             onChangeText={text => handleChange("name", text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Correo electrónico"
//             value={updateFormData.email}
//             onChangeText={text => handleChange("email", text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Contraseña"
//             secureTextEntry
//             value={updateFormData.password}
//             onChangeText={text => handleChange("password", text)}
//           />
//           <TouchableOpacity
//             style={styles.updateButton}
//             onPress={handleSubmitUpdate}
//           >
//             <Text style={styles.updateButtonText}>Actualizar</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   circulo: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'white',
//     overflow: 'hidden',
//     marginBottom: '10%',
//     marginTop:'10%'
//   },
//   contWhite:{
//     width: '90%',
//     height: '80%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginTop: '20%',
//     elevation: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     margin: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imagen: {
//     width: '100%',
//     height: '100%',
//   },
//   inputContainer: {
//     marginBottom: 10,
//     width: '90%',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold'
//   },
//   input: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 10,
//     width: '90%'
//   },
//   iconInput:{
//     marginLeft: 10,
//   },
//   inputText: {
//     flex: 1,
//     marginLeft: 10,
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   contBtn: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', 
//     marginTop: 20,
//     width: '80%',
//   },
//   btnInfo: {
//     width: '30%', 
//     marginTop: '5%',
//     marginRight: '18%',
//   },
//   textBtn: {
//     width: 150,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#21AEF9',
//     color: 'white',
//     textAlign: 'center',
//     lineHeight: 50, 
//     fontWeight: 'bold',
//     fontSize: 18
//   },
//   userData: {
//     alignItems: 'center',
//   },
//   contBlue: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1, 
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   formContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   updateButton: {
//     backgroundColor: '#21AEF9',
//     borderRadius: 10,
//     width: 150,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   updateButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default PerfilScreen;

import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const PerfilScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    typeUser: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = await SecureStore.getItemAsync('userData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('userData');
      navigation.navigate('Login');
      setUserData(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const openUpdateForm = () => {
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
  };
  
  
  const handleChange = (key, value) => {
    setUpdateFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      const { _id, ...updateData } = updateFormData;
      
      await axios.put(`https://app-movil-lzm2.vercel.app/api/user/${_id}`, updateData, {
        headers: {
          'x-access-token': token
        }
      });
  
      const response = await axios.get(`https://app-movil-lzm2.vercel.app/api/user/${_id}`, {
        headers: {
          'x-access-token': token
        }
      });
  
      setUserData(response.data);
  
      Alert.alert(
        "Actualización exitosa",
        "Los datos del usuario han sido actualizados exitosamente."
      );
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      Alert.alert(
        "Error",
        "Hubo un problema al actualizar los datos del usuario. Por favor, inténtalo de nuevo."
      );
    }
  };
 
  
  

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}>
        <View style={styles.contWhite}>
          <View style={styles.circulo}>
            <Image
              source={require('../../assets/perfil.png')}
              style={styles.imagen}
              resizeMode='cover'
            />
          </View>
          {userData && (
            <View style={styles.userData}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre de usuario:</Text>
                <View style={styles.input}>
                  <Ionicons style={styles.iconInput} name="happy-outline" size={24} color="black" />
                  <TextInput style={styles.inputText} value={userData.username} />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre:</Text>
                <View style={styles.input}>
                  <Ionicons style={styles.iconInput} name="person-outline" size={24} color="black" />
                  <TextInput style={styles.inputText} value={userData.name} />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Correo:</Text>
                <View style={styles.input}>
                  <Ionicons style={styles.iconInput} name="mail-outline" size={24} color="black" />
                  <TextInput style={styles.inputText} value={userData.email} />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Tipo de Usuario:</Text>
                <View style={styles.input}>
                  <Ionicons style={styles.iconInput} name="finger-print-outline" size={24} color="black" />
                  <TextInput style={styles.inputText} value={userData.typeUser} />
                </View>
              </View>
            </View>
          )}
          <View style={styles.contBtn}>
            <TouchableOpacity
              style={styles.btnInfo}
              onPress={openUpdateForm}
            >
              <Text style={styles.textBtn}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnInfo}
              onPress={handleLogout}
            >
              <Text style={styles.textBtn}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {/* Ventana flotante */}
      <Modal
        visible={showUpdateForm}
        transparent={true}
        animationType='fade'
        onRequestClose={closeUpdateForm}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text>Actualizar Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={updateFormData.username}
              onChangeText={(text) => setUpdateFormData({ ...updateFormData, username: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={updateFormData.name}
              onChangeText={(text) => setUpdateFormData({ ...updateFormData, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={updateFormData.email}
              onChangeText={(text) => setUpdateFormData({ ...updateFormData, email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              value={updateFormData.password}
              onChangeText={(text) => setUpdateFormData({ ...updateFormData, password: text })}
            />
            <TextInput
  style={styles.input}
  placeholder="Tipo de Usuario"
  value={updateFormData.typeUser}
  onChangeText={text => handleChange("typeUser", text)}
/>
            <TouchableOpacity
              style={styles.btnInfo}
              onPress={handleUpdate}
            >
              <Text style={styles.textBtn}>Actualizar</Text>
            </TouchableOpacity>
            <Button title="Cerrar" onPress={closeUpdateForm} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: '10%',
    marginTop:'10%'
  },
  contWhite:{
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '20%',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagen: {
      width: '100%',
      height: '100%',
    },
    inputContainer: {
      marginBottom: 10,
      width: '90%',
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold'
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      marginBottom: 10,
      width: '90%'
    },
    iconInput:{
      marginLeft: 10,
    },
    inputText: {
      flex: 1,
      marginLeft: 10,
      paddingVertical: 10,
      fontSize: 16,
    },
    contBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      marginTop: 20,
      width: '80%',
    },
    btnInfo: {
      width: '30%', 
      marginTop: '5%',
      marginRight: '18%',
    },
    textBtn: {
      width: 150,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#21AEF9',
      color: 'white',
      textAlign: 'center',
      lineHeight: 50, 
      fontWeight: 'bold',
      fontSize: 18
    },
    userData: {
      alignItems: 'center',
    },
    contBlue: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      alignItems: 'center',
    },
  });
  
  export default PerfilScreen;
  
       
