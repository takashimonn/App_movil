import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../screens/InicioScreen';
import ParametrosScreen from '../screens/ParametrosScreen';
import AgregarCabScreen from '../screens/AgregarCabScreen';
import ChequeoScreen from '../screens/ChequeoScreen';
import PerfilScreen from '../screens/PerfilScreen';
import VetScren from '../screens/VetScren';
import NewVetsScreen from '../screens/NewVetsScreen';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function InicioStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="InicioStackScreen"
          component={InicioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Parametros" component={ParametrosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewVets" component={NewVetsScreen} options={{ headerShown: false}}  />
        <Stack.Screen name="NuevoCab" component={AgregarCabScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Chequeo" component={ChequeoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="vets" component={VetScren} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator>

        <Tab.Screen 
            name="Bienvenido" 
            component={BienvenidaScreen} 
            options={{ 
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require('../../assets/granero.png')} style={{ width: 25, height: 25 }} />
              )}}   
        />

        <Tab.Screen 
            name="Inicio" 
            component={InicioStack} 
            options={{ 
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require('../../assets/inicio_caballo.png')} style={{ width: 30, height: 30 }} />
              )}}  
        />

          <Tab.Screen
            name="Veterinarios"
            component={VetScren}
            options={({ 
              headerShown: false, 
              tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/veterinario.png')} style={{ width: 25, height: 25 }} />
              )})
            }
          />          

        <Tab.Screen
            name="Perfil"
            component={PerfilScreen}
            options={({ 
              headerShown: false, 
              tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/usuario.png')} style={{ width: 20, height: 20 }} />
              )})
            }
        />
    </Tab.Navigator>
  );
}
