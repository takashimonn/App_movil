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
import { Button, Icon } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function InicioStack() {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name="Inicio" component={InicioScreen} options={{ headerShown: true, headerTitle: 'Inicio' }} /> */}
        <Stack.Screen             name="Inicio"
            component={InicioScreen}
            options={({ navigation }) => ({
                headerRight: () => (
                    <Button
                        icon={
                            <Icon
                                name="add"
                                size={30}
                                color="black"
                                background='white'
                                style={{ marginRight: 20 }}
                            />
                        }
                        onPress={() => navigation.navigate('NuevoCab')}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                    />
                ),
            })}
        /> 
        <Stack.Screen name="Parametros" component={ParametrosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewVets" component={NewVetsScreen} options={{ headerShown: true, headerTitle: 'Nuevo Veterinario'}}  />
        <Stack.Screen name="NuevoCab" component={AgregarCabScreen} options={{ headerShown: true, headerTitle: 'Nuevo Caballo'}} />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Inicio" 
            component={InicioStack} 
            options={{ 
              headerShown: false,
              tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" /> 
                }}  />

        <Tab.Screen 
            name="Chequeo" 
            component={ChequeoScreen} 
            options={{ 
              headerShown: true, headerTitle: 'Chequeo',
              tabBarIcon: () => <Ionicons name="clipboard-outline" size={24} color="black" /> 
            }} 
        />

        <Tab.Screen
            name="Veterinarios"
            component={VetScren}
            options={{
              headerShown: true, headerTitle: 'Veterinarios',
              tabBarIcon: () => <Ionicons name="bag-add-outline" size={24} color="black" />
            }}
        />

        <Tab.Screen
            name="Perfil"
            component={PerfilScreen}
            options={{
              headerShown: true, headerTitle: 'Perfil',
              tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />

            }}
        />

    </Tab.Navigator>
  );
}

