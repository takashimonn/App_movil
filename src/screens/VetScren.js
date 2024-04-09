import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const VetScreen = () => {
  const navigation = useNavigation();
  const [veterinarians, setVeterinarians] = useState([]);

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await axios.get('http://192.168.1.11:3000/api/vets');
        setVeterinarians(response.data);
      } catch (error) {
        console.error("Error al obtener los veterinarios:", error);
      }
    };
    fetchVeterinarians();
  }, []);

  return ( 
    <View style={styles.container}>
      {veterinarians.map(vet => (
        <TouchableOpacity
          key={vet._id}
          style={styles.card}
          onPress={() => navigation.navigate('DetalleVet', { vetId: vet._id })}
        >
          <Text style={styles.text}>{vet.firstName} {vet.lastName}</Text>
          <Text style={styles.text}>Edad: {vet.age}</Text>
          <Text style={styles.text}>Email: {vet.email}</Text>
          <Text style={styles.text}>Teléfono: {vet.phone}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#A6E58D',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  }
});

export default VetScreen;
