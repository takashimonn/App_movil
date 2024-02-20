import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'; 




// Importación de screens
import InicioScreen from '../screens/InicioScreen';
import AgregarCabScreen from '../screens/AgregarCabScreen';
import UbicacionScreen from '../screens/UbicacionScreen';
import ParametrosScreen from '../screens/ParametrosScreen';

// Declaración de constante para crear el Drawer
const Drawer = createDrawerNavigator();

// Función para renderizar el Drawer Navigator
function DrawerNavigaton() {
  
  // Función para renderizar el contenido personalizado del Drawer
  function CustomDrawerContent(props) {
    return (
      <View style={styles.container}>
        {/* Foto de portada */}
        <Image
          source={require('../../assets/portada.jpg')} // Ruta de la imagen de la portada
          style={styles.portadaImage} // Estilos de la imagen
          resizeMode="cover"
        />

        {/* Foto de perfil de usuario */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/user.jpg')} // Ruta de la imagen de perfil
            style={styles.profileImage} // Estilos de la imagen de perfil
            resizeMode="cover"
          />
        </View>

        <DrawerContentScrollView {...props}>
          {/* Lista de opciones del Drawer */}
          <View style={styles.drawerItemsContainer}>
            <DrawerItem
              icon={() => <Icon name="home" size={20} />}
              label={() => <Text style={styles.drawerItemLabel}>Inicio</Text>}
              onPress={() => props.navigation.navigate('Inicio')}
            />
            <DrawerItem
               icon={() => <IconFontAwesome5 name="horse" size={15} />}
              label={() => <Text style={styles.drawerItemLabel}>Nuevo Caballo</Text>}
              onPress={() => props.navigation.navigate('NuevoCaballo')}
            />
            <DrawerItem
              icon={() => <IconEvilIcons name="location" size={20}  />}
              label={() => <Text style={styles.drawerItemLabel}>Ubicación</Text>}
              onPress={() => props.navigation.navigate('Ubicacion')}
            />
            <DrawerItem
              label={() => <Text style={styles.drawerItemLabel}>Parámetros</Text>}
              onPress={() => props.navigation.navigate('Parametros')}
            />
          </View>
        </DrawerContentScrollView>
      </View>
    );
  }

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Inicio" component={InicioScreen} />
      <Drawer.Screen name="NuevoCaballo" component={AgregarCabScreen} />
      <Drawer.Screen name="Ubicacion" component={UbicacionScreen} />
      <Drawer.Screen name="Parametros" component={ParametrosScreen} />
    </Drawer.Navigator>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  portadaImage: {
    width: '100%',
    height: 175,
  },
  profileContainer: {
    position: 'absolute',
    top: '13%',
    left: '30%',
    transform: [{ translateX: -50 }, { translateY: -50 }], // Centrar el elemento
    zIndex: 1,  // Asegurar que esté por encima de la imagen de portada
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Para hacer la imagen circular
    marginTop: 50, // Margen superior para la imagen de perfil
  },
  drawerItemsContainer: {
    marginTop: 30, // Margen superior para los items del Drawer
  },
  drawerItemLabel: {
    fontSize: 18, // Tamaño del texto del label
    marginLeft: 20, // Margen izquierdo del texto del label
  },
});

export default DrawerNavigaton;
