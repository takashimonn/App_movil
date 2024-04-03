import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function VetScreen() {
  const navigation = useNavigation();

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
