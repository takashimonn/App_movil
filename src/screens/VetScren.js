import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VetScreen = ({ Navigation }) => {
  // const navigation = useNavigation();
  const [veterinarios, SetVeterinarios] = useState([]);

  useEffect(() => {
    const obtenerVets = async () => {
      try {
        const response = await axios.get('http://192.168.1.16:3000/api/veterinarios');
        SetVeterinarios(response.data);
      } catch (error) {
        console.error("Error al obtener los caballos: ", error);
      }
    };

    obtenerVets();
  }, []);

  const navigateToAnotherScreen = () => {
    navigation.navigate('NewVets');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Aquí van los veterinarios!</Text>
      <Button title="Ir a otro screen" onPress={navigateToAnotherScreen} />
    </View>
  );
}

export default VetScreen;
