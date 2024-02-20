import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ubicacion from './UbicacionScreen';

const ParametrosScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/caballo.jpg')}
        style={styles.imgPrincipalParametros}
      />
      <Text style={styles.textHorseName}>
        Horse Name
      </Text>

      <View style={styles.parametrosContainer}>
        <View style={styles.parametro}>
          <Image
            source={require('../../assets/ritmo-cardiaco.png')}
            style={styles.imgParametros}
          />
          <Text style={styles.textParametros}>
            Presión
          </Text>
        </View>

        <View style={styles.parametro}>
          <Image
            source={require('../../assets/termometro.png')}
            style={styles.imgParametros}
          />
          <Text style={styles.textParametros}>
            Temperatura
          </Text>
        </View>

        <View style={styles.parametro}>
          <Image
            source={require('../../assets/presion-arterial.png')}
            style={styles.imgParametros}
          />
          <Text style={styles.textParametros}>
            Presión Arterial
          </Text>
        </View>

        <TouchableOpacity
            style={styles.btnUbicacion}
            onPress={() => {
                navigation.navigate('Ubicacion');
            }}
        >
            <Text style={styles.textBtnUbicacion}>Ver Ubicación</Text>
        </TouchableOpacity>


      </View>

      <View style={styles.snackBar}>
        <Text style={styles.textSnackBar}>
            Caballo Estable
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgPrincipalParametros: {
    width: '100%',
    height: 250,
  },

  textHorseName: {
    marginTop: 30,
    marginLeft: 25,
    fontSize: 30,
    fontWeight: 'bold',
  },

  parametrosContainer: {
    width: '100%',
    marginTop: 40,
  },

  parametro: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
  },

  imgParametros: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },

  textParametros: {
    fontSize: 20,
    marginLeft: 30,
  },

  btnUbicacion: {
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
  },

  textBtnUbicacion: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50, 
  },

  snackBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textSnackBar: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  }

});

export default ParametrosScreen;
