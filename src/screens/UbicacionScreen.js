import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios';

const UbicacionScreen = ({ navigation }) => {
  const[caballos, setCaballos] = useState([]);

  useEffect(() => {
    const ObtenerCaballos = async () => {
      try {
        const response = await axios.get('http://192.168.1.10:3000/api/horse');
        setCaballos(response.data);
      } catch (error) {
          console.error("bailo berta hermana", error);
      }
    };
    ObtenerCaballos();
  }, []);
  return (
    <View style={styles.container}>
        <Text>
            ojala que si jale 
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
});

export default UbicacionScreen;
