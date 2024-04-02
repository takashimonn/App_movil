import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../screens/InicioScreen';
import ParametrosScreen from '../screens/ParametrosScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function InicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Parametros" component={ParametrosScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={InicioStack} options={{ headerShown: false }}  />
    </Tab.Navigator>
  );
}
