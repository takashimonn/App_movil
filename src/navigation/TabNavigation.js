import React from 'react';
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
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        <Stack.Screen name="Chequeo" component={ChequeoScreen} options={{ headerShown: true, headerTitle: 'Chequeo Rutinario'}} />
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
              tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" /> 
                }}  />
        <Tab.Screen 
            name="Inicio" 
            component={InicioStack} 
            options={{ 
              headerShown: false,
              tabBarIcon: () => <MaterialCommunityIcons name="horse" size={24} color="black" /> 
                }}  />
          <Tab.Screen
            name="Veterinarios"
            component={VetScren}
            options={({ 
              headerShown: false, 
              tabBarIcon: ({ size }) => (
                <Icon
                  name="bag-add-outline"
                  type="ionicon"
                  size={size}
                  color="black"
                />
              )})
            }
          />          

        <Tab.Screen
            name="Perfil"
            component={PerfilScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />

            }}
        />
          {/* <Tab.Screen
            name="NewVeterinarios"
            component={NewVetsScreen}
            options={{
              headerShown: false, headerTitle: false,
              tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />

            }}
        /> */}
    </Tab.Navigator>
  );
}

