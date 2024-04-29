// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Alert, ImageBackground } from 'react-native';
// import { CheckBox } from 'react-native-elements';
// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';

// const ChequeoScreen = ({ route }) => {
//   const { caballoNombre } = route.params;
//   // se declara el estado del componente como nulo
//   const [nombre] = useState(caballoNombre || '');
//   const [medicinasSeleccionadas, setMedicinasSeleccionadas] = useState([]);
//   const [especificaciones, setEspecificaciones] = useState('');
//   const [alimento, setAlimento] = useState('');
//   const [herraje, setHerraje] = useState('');
//   const [job, setJob] = useState('');

//   const handleCheckboxChange = (medicina) => {
//       const index = medicinasSeleccionadas.indexOf(medicina);
//       if (index === -1) {
//           setMedicinasSeleccionadas([...medicinasSeleccionadas, medicina]);
//       } else {
//           const updatedMedicinas = [...medicinasSeleccionadas];
//           updatedMedicinas.splice(index, 1);
//           setMedicinasSeleccionadas(updatedMedicinas);
//       }
//   };

//   const handleSubmit = async () => {
//     try {
//       const token = await SecureStore.getItemAsync('token');
//       const response = await axios.post(
//         'https://app-movil-lzm2.vercel.app/api/checks',
//         {
//           // indicas los propiedades que vas a mandar
//           namehorse: nombre,
//           medicines: medicinasSeleccionadas.join(', '),
//           specifications: especificaciones,
//           food: alimento,
//           horseshoes: herraje,
//           job: job,
//         },
//         {   
//           headers: {
//             'x-access-token': `${token}`
//       }
//     }
//       );
//       console.log('Caballo agregado:', response.data);
//       Alert.alert('Registro exitoso');
//     } catch (error) {
//       console.error('Error al agregar el caballo:', error);
//       Alert.alert('Error', 'Ocurrió un error al agregar el caballo');
//     }
//   };
  

// return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}>
//         <View style={styles.contWhite}> 
        
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.formulario}>
//           <Text style={styles.inputNombre }>Chequeo para {nombre}</Text>
//           {/* <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text> */}
//           <Text style={styles.labelMedicinas}>Medicinas:</Text>
//           <View style={styles.checkContainer}>
//             <CheckBox
//                 title='Desparacitación'
//                 checked={medicinasSeleccionadas.includes('Desparacitación')}
//                 onPress={() => handleCheckboxChange('Desparacitación')}
//             />
//             <CheckBox
//                 title='Vacunas'
//                 checked={medicinasSeleccionadas.includes('Vacunas')}
//                 onPress={() => handleCheckboxChange('Vacunas')}
//             />
//             <CheckBox
//                 title='Suero'
//                 checked={medicinasSeleccionadas.includes('Suero')}
//                 onPress={() => handleCheckboxChange('Suero')}
//             />
//               <CheckBox
//                   title='Vitaminas'
//                   checked={medicinasSeleccionadas.includes('Vitaminas')}
//                   onPress={() => handleCheckboxChange('Vitaminas')}
//               />
//               <CheckBox
//                   title='Complejos'
//                   checked={medicinasSeleccionadas.includes('Complejos')}
//                   onPress={() => handleCheckboxChange('Complejos')}
//               />
//               <CheckBox
//                   title='Colicos'
//                   checked={medicinasSeleccionadas.includes('Colicos')}
//                   onPress={() => handleCheckboxChange('Colicos')}
//               />
//           </View>
//             <Text style={styles.label}>Especificaciones de Medicamentos</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Ingrese las especificaciones"
//                 onChangeText={text => setEspecificaciones(text)}
//             />
//             {/* <Text>3.- Especifica los siguientes parametros señalados</Text> */}
//             <Text style={styles.label}>Cantidad de Alimento:</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Ingrese la cantidad de alimento"
//                 onChangeText={text => setAlimento(text)}
//             />
//             <Text style={styles.label}>Desgaste de Herraje:</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Ingrese el desgaste de herraje"
//                 onChangeText={text => setHerraje(text)}
//             />
//             <Text style={styles.label}>Horas de trabajo:</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Ingrese las horas de trabajo"
//                 onChangeText={text => setJob(text)}
//             />
//             <TouchableOpacity style={styles.botonAgregar} onPress={handleSubmit}>
//                 <Text style={styles.textoBoton}>Agregar</Text>
//             </TouchableOpacity>
//           </View>
//        </ScrollView>
//         </View> 
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',   
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
//   contWhite:{
//     width: '90%',
//     height: '90%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginTop: '10%',
//     elevation: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       margin: 10,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   scrollView: {
//     width: '90%',
//     marginTop: '10%'
//   },
//   inputNombre: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   labelMedicinas: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold',
//     marginTop: '7%'
//   },

//   formulario: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold',
//     marginTop: '3%'
  
//   }, 
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '95%',
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

//   checkContainer: {
//     marginTop: 10,
    
//   },

// });

// export default ChequeoScreen;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Alert, ImageBackground, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

const ChequeoScreen = ({ route }) => {
  const navigation = useNavigation(); 

  const { caballoNombre } = route.params;
  // se declara el estado del componente como nulo
  const [nombre] = useState(caballoNombre || '');
  const [medicinasSeleccionadas, setMedicinasSeleccionadas] = useState([]);
  const [especificaciones, setEspecificaciones] = useState('');
  const [alimento, setAlimento] = useState('');
  const [herraje, setHerraje] = useState('');
  const [job, setJob] = useState('');

  const handleCheckboxChange = (medicina) => {
      const index = medicinasSeleccionadas.indexOf(medicina);
      if (index === -1) {
          setMedicinasSeleccionadas([...medicinasSeleccionadas, medicina]);
      } else {
          const updatedMedicinas = [...medicinasSeleccionadas];
          updatedMedicinas.splice(index, 1);
          setMedicinasSeleccionadas(updatedMedicinas);
      }
  };

  const handleSubmit = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.post(
        'https://app-movil-lzm2.vercel.app/api/checks',
        {
          // indicas los propiedades que vas a mandar
          namehorse: nombre,
          medicines: medicinasSeleccionadas.join(', '),
          specifications: especificaciones,
          food: alimento,
          horseshoes: herraje,
          job: job,
        },
        {   
          headers: {
            'x-access-token': `${token}`
      }
    }
      );
      navigation.navigate('InicioStackScreen');
      console.log('Caballo agregado:', response.data);
      Alert.alert('Registro exitoso');
      
    } catch (error) {
      console.error('Error al agregar el caballo:', error);
      Alert.alert('Error', 'Ocurrió un error al agregar el caballo');
    }
  };
  

return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}>
        <View style={styles.contWhite}> 
          <ScrollView style={styles.scrollView}>
            <View style={styles.formulario}>
              <Text style={styles.inputNombre }>Chequeo para {nombre}</Text>
                <Text style={styles.labelMedicinas}>Medicinas:</Text>
                <View style={styles.checkContainer}>
                  <CheckBox
                      title='Desparacitación'
                      checked={medicinasSeleccionadas.includes('Desparacitación')}
                      onPress={() => handleCheckboxChange('Desparacitación')}
                  />
                  <CheckBox
                      title='Vacunas'
                      checked={medicinasSeleccionadas.includes('Vacunas')}
                      onPress={() => handleCheckboxChange('Vacunas')}
                  />
                  <CheckBox
                      title='Suero'
                      checked={medicinasSeleccionadas.includes('Suero')}
                      onPress={() => handleCheckboxChange('Suero')}
                  />
                    <CheckBox
                        title='Vitaminas'
                        checked={medicinasSeleccionadas.includes('Vitaminas')}
                        onPress={() => handleCheckboxChange('Vitaminas')}
                    />
                    <CheckBox
                        title='Complejos'
                        checked={medicinasSeleccionadas.includes('Complejos')}
                        onPress={() => handleCheckboxChange('Complejos')}
                    />
                    <CheckBox
                        title='Colicos'
                        checked={medicinasSeleccionadas.includes('Colicos')}
                        onPress={() => handleCheckboxChange('Colicos')}
                    />
                </View>
                <View style={styles.form2}> 
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Especificaciones de Medicamentos</Text>
                      <View style={styles.input}>
                      <Image source={require('../../assets/medicina.png')} style={styles.iconHorse} />
                        <TextInput
                          style={styles.inputText}
                          placeholder="Ingrese las especificaciones"
                          onChangeText={text => setEspecificaciones(text)}
                        />
                      </View>
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Cantidad de Alimento:</Text>
                      <View style={styles.input}>
                        <Image source={require('../../assets/comida.png')} style={styles.iconHorse} />
                        <TextInput
                          style={styles.inputText}
                          placeholder="Ingrese la cantidad de alimento"
                          onChangeText={text => setAlimento(text)}
                        />
                      </View>
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Desgaste de Herraje:</Text>
                      <View style={styles.input}>
                        <Image source={require('../../assets/herradura.png')} style={styles.iconHorse} />
                        <TextInput
                          style={styles.inputText}
                          placeholder="Ingrese el desgaste de herraje"
                          onChangeText={text => setHerraje(text)}
                        />
                      </View>
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Horas de trabajo:</Text>
                      <View style={styles.input}>
                        <Image source={require('../../assets/horas-laborales.png')} style={styles.iconHorse} />
                        <TextInput
                          style={styles.inputText}
                          placeholder="Ingrese las horas de trabajo"
                          onChangeText={text => setJob(text)}
                        />
                      </View>
                  </View>
                  <TouchableOpacity style={styles.botonAgregar} onPress={handleSubmit}>
                      <Text style={styles.textoBoton}>Agregar</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </ScrollView>
        </View> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',   
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
  contWhite:{
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '10%',
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
  scrollView: {
    width: '90%',
    marginTop: '10%'
  },
  inputNombre: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  labelMedicinas: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: '7%'
  },
  formulario: {
    marginBottom: 20,
  },
  botonAgregar: {
    backgroundColor: '#21AEF9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  inputContainer: {
    marginBottom: 10,
    width: '95%',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  form2: {
    alignItems: 'center',
    marginTop: '5%'
  },
  iconInput:{
    marginLeft: 10,
  },
  iconHorse: {
    width: 30,
    height: 30,
    marginLeft: 10,
  }

});

export default ChequeoScreen;
