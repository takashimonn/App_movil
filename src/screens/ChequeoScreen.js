// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { CheckBox } from 'react-native-elements';

// function ChequeoScreen() {
//   const [desparacitacion, setDesparacitacion] = useState(false);
//   const [vacunas, setVacunas] = useState(false);
//   const [suero, setSuero] = useState(false);
//   const [vitaminas, setVitaminas] = useState(false);
//   const [complejos, setComplejos] = useState(false);
//   const [colicos, setColicos] = useState(false);

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.formulario}>
//           <Text>1.- Ingresa el Nombre del caballo correpondiente</Text>

//           <Text style={styles.label}>Nombre del caballo:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el nombre"
//           />

//           <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text>

//           <View style={styles.checkContainer}>
//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Desparacitación:</Text>
//               <CheckBox
//                 value={desparacitacion}
//                 onValueChange={setDesparacitacion}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Vacunas:</Text>
//               <CheckBox
//                 value={vacunas}
//                 onValueChange={setVacunas}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Suero:</Text>
//               <CheckBox
//                 value={suero}
//                 onValueChange={setSuero}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Vitaminas:</Text>
//               <CheckBox
//                 value={vitaminas}
//                 onValueChange={setVitaminas}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Complejos:</Text>
//               <CheckBox
//                 value={complejos}
//                 onValueChange={setComplejos}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Colicos:</Text>
//               <CheckBox
//                 value={colicos}
//                 onValueChange={setColicos}
//               />
//             </View>
//           </View>

//           <Text style={styles.label}>Especificaciones de Medicamentos</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las especificaciones"
//           />

//           <Text>3.- Especifica los siguientes parametros señalados</Text>

//           <Text style={styles.label}>Cantidad de Alimento:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese la cantidad de alimento"
//           />
    
//           <Text style={styles.label}>Desgaste de Herraje:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el desgaste de herraje"
//           />
          
//           <Text style={styles.label}>Horas de trabajo:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las horas de trabajo"
//           />

//           <TouchableOpacity style={styles.botonAgregar}>
//             <Text style={styles.textoBoton}>Agregar</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'white'
//   },
//   scrollView: {
//     width: '100%',
//   },
//   formulario: {
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
//     backgroundColor: 'green',
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
//   checkLabel: {
//     marginBottom: 5,
//   },
//   checkItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
// });

// export default ChequeoScreen;

// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
// // import { CheckBox } from 'react-native-elements';
// import axios from 'axios';

// const ChequeoScreen = () => {
//   const [nombre, setNombre] = useState('');
//   const [medicinas, setMedicinas] = useState('');
//   const [especificaciones, setEspecificaciones] = useState('');
//   const [alimento, setAlimento] = useState('');
//   const [herraje, setHerraje] = useState('');
//   const [job, setJob] = useState('');

//   const handleSubmit = () => {
//     axios.post('http://172.20.102.158:3000/api/checks',{
//       name: nombre,
//       medicines: medicinas,
//       specifications: especificaciones,
//       food: alimento,
//       horseshoes: herraje,
//       job: job
//     })
//     .then(response => {
//       console.log('Caballo agregado:', response.data);
//       Alert.alert('Registro exitoso'); 
//     })
//     .catch(error => {
//       console.error('Error al agregar el caballo:', error);
//     });
//   };

//   // const [desparacitacion, setDesparacitacion] = useState(false);
//   // const [vacunas, setVacunas] = useState(false);
//   // const [suero, setSuero] = useState(false);
//   // const [vitaminas, setVitaminas] = useState(false);
//   // const [complejos, setComplejos] = useState(false);
//   // const [colicos, setColicos] = useState(false);

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.formulario}>
//           <Text>1.- Ingresa el Nombre del caballo correpondiente</Text>

//           <Text style={styles.label}>Nombre del caballo:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el nombre"
//             onChangeText={text => setNombre(text)}
//           />

//           <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text>
          
//           <Text style={styles.label}>medicinas:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el nombre"
//             onChangeText={text => setMedicinas(text)}
//           />

//           {/* <View style={styles.checkContainer}>
//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Desparacitación:</Text>
//               <CheckBox
//                 value={desparacitacion}
//                 onValueChange={setDesparacitacion}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Vacunas:</Text>
//               <CheckBox
//                 value={vacunas}
//                 onValueChange={setVacunas}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Suero:</Text>
//               <CheckBox
//                 value={suero}
//                 onValueChange={setSuero}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Vitaminas:</Text>
//               <CheckBox
//                 value={vitaminas}
//                 onValueChange={setVitaminas}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Complejos:</Text>
//               <CheckBox
//                 value={complejos}
//                 onValueChange={setComplejos}
//               />
//             </View>

//             <View style={styles.checkItem}>
//               <Text style={styles.checkLabel}>Colicos:</Text>
//               <CheckBox
//                 value={colicos}
//                 onValueChange={setColicos}
//               />
//             </View>
//           </View> */}

//           <Text style={styles.label}>Especificaciones de Medicamentos</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las especificaciones"
//             onChangeText={text => setEspecificaciones(text)}
//           />

//           <Text>3.- Especifica los siguientes parametros señalados</Text>

//           <Text style={styles.label}>Cantidad de Alimento:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese la cantidad de alimento"
//             onChangeText={text => setAlimento(text)}
//           />
    
//           <Text style={styles.label}>Desgaste de Herraje:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el desgaste de herraje"
//             onChangeText={text => setHerraje(text)}
//           />
          
//           <Text style={styles.label}>Horas de trabajo:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las horas de trabajo"
//             onChangeText={text => setJob(text)}
//           />
//       <TouchableOpacity style={styles.botonAgregar} onPress={handleSubmit}>
//         <Text style={styles.textoBoton}>Agregar</Text>
//       </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'white'
//   },
//   scrollView: {
//     width: '100%',
//   },
//   formulario: {
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
//     backgroundColor: 'green',
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
//   checkLabel: {
//     marginBottom: 5,
//   },
//   checkItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
// });

// export default ChequeoScreen;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const ChequeoScreen = () => {
//   const [nombre, setNombre] = useState('');
//   const [medicinasSeleccionadas, setMedicinasSeleccionadas] = useState([]);
//   const [especificaciones, setEspecificaciones] = useState('');
//   const [alimento, setAlimento] = useState('');
//   const [herraje, setHerraje] = useState('');
//   const [job, setJob] = useState('');

//   const handleCheckboxChange = (medicina) => {
//     const index = medicinasSeleccionadas.indexOf(medicina);
//     if (index === -1) {
//       setMedicinasSeleccionadas([...medicinasSeleccionadas, medicina]);
//     } else {
//       const updatedMedicinas = [...medicinasSeleccionadas];
//       updatedMedicinas.splice(index, 1);
//       setMedicinasSeleccionadas(updatedMedicinas);
//     }
//   };

//   const handleSubmit = () => {
//     axios.post('http://172.20.102.158:3000/api/checks',{
//       name: nombre,
//       medicines: medicinasSeleccionadas.join(', '), // Convertir el array de medicinas a una cadena separada por comas
//       specifications: especificaciones,
//       food: alimento,
//       horseshoes: herraje,
//       job: job
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
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.formulario}>
//           <Text>1.- Ingresa el Nombre del caballo correpondiente</Text>

//           <Text style={styles.label}>Nombre del caballo:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el nombre"
//             onChangeText={text => setNombre(text)}
//           />

//           <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text>

//           <Text style={styles.label}>Medicinas:</Text>
//           <View style={styles.checkContainer}>

// {/* un boton aqui  */}
//             <TouchableOpacity
//               style={styles.checkItem}
//               onPress={() => handleCheckboxChange('Desparacitacion')}
//             >
//               <Text style={styles.checkLabel}>Desparacitación</Text>
//             </TouchableOpacity>

// {/* otro boton aqui */}
//             <TouchableOpacity
//               style={styles.checkItem}
//               onPress={() => handleCheckboxChange('Vacunas')}
//             >
//               <Text style={styles.checkLabel}>Vacunas</Text>
//             </TouchableOpacity>

// {/* otro boton aqui */}
//             <TouchableOpacity
//               style={styles.checkItem}
//               onPress={() => handleCheckboxChange('Suero')}
//             >
//               <Text style={styles.checkLabel}>Suero</Text>
//             </TouchableOpacity>

// {/* otro boton aqui */}
//             <TouchableOpacity
//               style={styles.checkItem}
//               onPress={() => handleCheckboxChange('Vitaminas')}
//             >
//               <Text style={styles.checkLabel}>Vitaminas</Text>
//             </TouchableOpacity>

// {/* otro boton aqui */}
//             <TouchableOpacity
//               style={styles.checkItem}
//               onPress={() => handleCheckboxChange('Complejos')}
//             >
//               <Text style={styles.checkLabel}>Complejos</Text>
//             </TouchableOpacity>
            
// {/* otro boton aqui */}
//             <TouchableOpacity
//               style={styles.checkItem}
//               onPress={() => handleCheckboxChange('Colicos')}
//             >
//               <Text style={styles.checkLabel}>Colicos</Text>
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.label}>Especificaciones de Medicamentos</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las especificaciones"
//             onChangeText={text => setEspecificaciones(text)}
//           />

//           <Text>3.- Especifica los siguientes parametros señalados</Text>

//           <Text style={styles.label}>Cantidad de Alimento:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese la cantidad de alimento"
//             onChangeText={text => setAlimento(text)}
//           />
    
//           <Text style={styles.label}>Desgaste de Herraje:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese el desgaste de herraje"
//             onChangeText={text => setHerraje(text)}
//           />
          
//           <Text style={styles.label}>Horas de trabajo:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las horas de trabajo"
//             onChangeText={text => setJob(text)}
//           />

//           <TouchableOpacity style={styles.botonAgregar} onPress={handleSubmit}>
//             <Text style={styles.textoBoton}>Agregar</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'white'
//   },
//   scrollView: {
//     width: '100%',
//   },
//   formulario: {
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
//     backgroundColor: 'green',
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
//   checkLabel: {
//     marginBottom: 5,
//   },
//   checkItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
// });

// export default ChequeoScreen;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';

const ChequeoScreen = () => {
  const [nombre, setNombre] = useState('');
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

  const handleSubmit = () => {
    axios.post('http://172.20.97.136:3000/api/checks',{
      namehorse: nombre,
      medicines: medicinasSeleccionadas.join(', '), // Convertir el array de medicinas a una cadena separada por comas
      specifications: especificaciones,
      food: alimento,
      horseshoes: herraje,
      job: job
    })
    .then(response => {
      console.log('Caballo agregado:', response.data);
      Alert.alert('Registro exitoso'); 
    })
    .catch(error => {
      console.error('Error al agregar el caballo:', error);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.formulario}>
          <Text>1.- Ingresa el Nombre del caballo correpondiente</Text>

          <Text style={styles.label}>Nombre del caballo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre"
            onChangeText={text => setNombre(text)}
          />

          <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text>

          <Text style={styles.label}>Medicinas:</Text>
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

          <Text style={styles.label}>Especificaciones de Medicamentos</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese las especificaciones"
            onChangeText={text => setEspecificaciones(text)}
          />

          <Text>3.- Especifica los siguientes parametros señalados</Text>

          <Text style={styles.label}>Cantidad de Alimento:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de alimento"
            onChangeText={text => setAlimento(text)}
          />
    
          <Text style={styles.label}>Desgaste de Herraje:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el desgaste de herraje"
            onChangeText={text => setHerraje(text)}
          />
          
          <Text style={styles.label}>Horas de trabajo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese las horas de trabajo"
            onChangeText={text => setJob(text)}
          />

          <TouchableOpacity style={styles.botonAgregar} onPress={handleSubmit}>
            <Text style={styles.textoBoton}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  scrollView: {
    width: '100%',
  },
  formulario: {
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
  checkContainer: {
    marginTop: 10,
  },
});

export default ChequeoScreen;

