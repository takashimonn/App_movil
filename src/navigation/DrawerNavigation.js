import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import IconEntypo from 'react-native-vector-icons/Entypo'; 
import IconAntDesing from 'react-native-vector-icons/AntDesign'

// Importación de screens
import InicioScreen from '../screens/InicioScreen';
import AgregarCabScreen from '../screens/AgregarCabScreen';
import UbicacionScreen from '../screens/UbicacionScreen';
import ParametrosScreen from '../screens/ParametrosScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  
  function CustomDrawerContent(props) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/portada.jpg')}
          style={styles.portadaImage}
          resizeMode="cover"
        />

        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/user.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <DrawerContentScrollView {...props}>
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
              icon={() => <IconEntypo name="location-pin" size={20}  />}
              label={() => <Text style={styles.drawerItemLabel}>Ubicación</Text>}
              onPress={() => props.navigation.navigate('Ubicacion')}
            />
            <DrawerItem
              icon={() => <IconAntDesing name="eye" size={20}  />}
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
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  drawerItemsContainer: {
    marginTop: 30,
  },
  drawerItemLabel: {
    fontSize: 18,
    marginLeft: 20,
  },
});

export default DrawerNavigation;

