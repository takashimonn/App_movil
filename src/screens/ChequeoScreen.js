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

//           <Text style={styles.check}>Desparacitación:</Text>
//           <CheckBox
//             value={desparacitacion}
//             onValueChange={setDesparacitacion}
//           />

//           <Text style={styles.check}>Vacunas:</Text>
//           <CheckBox
//             value={vacunas}
//             onValueChange={setVacunas}
//           />

//           <Text style={styles.check}>Suero:</Text>
//           <CheckBox
//             value={suero}
//             onValueChange={setSuero}
//           />

//           <Text style={styles.check}>Vitaminas:</Text>
//           <CheckBox
//             value={vitaminas}
//             onValueChange={setVitaminas}
//           />

//           <Text style={styles.check}>Complejos:</Text>
//           <CheckBox
//             value={complejos}
//             onValueChange={setComplejos}
//           />

//           <Text style={styles.check}>Colicos:</Text>
//           <CheckBox
//             value={colicos}
//             onValueChange={setColicos}
//           />

//           <Text style={styles.label}>Especificaciones</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las enfermedades"
//             // onChangeText={text => setEnfermedades(text)}
//           />
//           <Text style={styles.label}>Cantidad de Alimento:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ingrese las enfermedades"
//             // onChangeText={text => setEnfermedades(text)}
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
// });

// export default ChequeoScreen;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

function ChequeoScreen() {
  const [desparacitacion, setDesparacitacion] = useState(false);
  const [vacunas, setVacunas] = useState(false);
  const [suero, setSuero] = useState(false);
  const [vitaminas, setVitaminas] = useState(false);
  const [complejos, setComplejos] = useState(false);
  const [colicos, setColicos] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.formulario}>
          <Text>1.- Ingresa el Nombre del caballo correpondiente</Text>

          <Text style={styles.label}>Nombre del caballo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre"
          />

          <Text>2.- Señala cual de estas opciones fue aplicada al caballo durante el día de hoy</Text>

          <View style={styles.checkContainer}>
            <View style={styles.checkItem}>
              <Text style={styles.checkLabel}>Desparacitación:</Text>
              <CheckBox
                value={desparacitacion}
                onValueChange={setDesparacitacion}
              />
            </View>

            <View style={styles.checkItem}>
              <Text style={styles.checkLabel}>Vacunas:</Text>
              <CheckBox
                value={vacunas}
                onValueChange={setVacunas}
              />
            </View>

            <View style={styles.checkItem}>
              <Text style={styles.checkLabel}>Suero:</Text>
              <CheckBox
                value={suero}
                onValueChange={setSuero}
              />
            </View>

            <View style={styles.checkItem}>
              <Text style={styles.checkLabel}>Vitaminas:</Text>
              <CheckBox
                value={vitaminas}
                onValueChange={setVitaminas}
              />
            </View>

            <View style={styles.checkItem}>
              <Text style={styles.checkLabel}>Complejos:</Text>
              <CheckBox
                value={complejos}
                onValueChange={setComplejos}
              />
            </View>

            <View style={styles.checkItem}>
              <Text style={styles.checkLabel}>Colicos:</Text>
              <CheckBox
                value={colicos}
                onValueChange={setColicos}
              />
            </View>
          </View>

          <Text style={styles.label}>Especificaciones de Medicamentos</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese las especificaciones"
          />

          <Text>3.- Especifica los siguientes parametros señalados</Text>

          <Text style={styles.label}>Cantidad de Alimento:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de alimento"
          />
    
          <Text style={styles.label}>Desgaste de Herraje:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el desgaste de herraje"
          />
          
          <Text style={styles.label}>Horas de trabajo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese las horas de trabajo"
          />

          <TouchableOpacity style={styles.botonAgregar}>
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
    backgroundColor: 'green',
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
  checkLabel: {
    marginBottom: 5,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default ChequeoScreen;
