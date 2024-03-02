import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Agrega más pantallas de autenticación según sea necesario */}
    </Stack.Navigator>
  );
}

export default AuthStack;
//borrrar