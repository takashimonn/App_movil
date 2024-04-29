import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { getHorses } from "../API/API";
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const InicioScreen = ({ navigation }) => {
    const [caballos, setCaballos] = useState([]);
    const [userData, setUserData] = useState(null);

    const getData = async () => {
        const data = await getHorses();
        setCaballos(data);
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedData = await SecureStore.getItemAsync('userData');
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    setUserData(parsedData);
                } else {
                    navigation.navigate('Login');
                }
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        getData();
    }, []); 

    getData();

    return (
        <View style={styles.container}>
             <View style={styles.blueContainer}>
                 <View style={styles.headerContent}>
                     <Text style={styles.textBlueCont}>Registro de caballos</Text>
                 </View>
             </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    {caballos.map(caballo => (
                        <TouchableOpacity
                            key={caballo._id}
                            style={styles.animal}
                            onPress={() => {
                                navigation.navigate('Parametros', { caballoId: caballo._id });
                            }}
                        >
                            <View style={styles.iconAndTextContainer}>
                                <Image source={require('../../assets/horse_color.png')} style={styles.icon} />
                                <Text style={styles.textBtnHorseName}>{caballo.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            {userData && (userData.typeUser === 'manager' || userData.typeUser === 'admin') && (
                <TouchableOpacity
                    onPress={() => navigation.navigate('NuevoCab')}
                    style={styles.addButton}
                >
                    <Ionicons name="add" size={30} color="#21AEF9" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: '50%'
    },
    animal: {
        width: '90%',
        height: 100,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: '7%',
        justifyContent: 'center',
    },
    addButton:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor:'white',
        width: 50,             
        height: 50,             
        borderRadius: 25,     
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
          android: {
            elevation: 10,
          },
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          },
        }),
      },
    textBtnHorseName: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 20,
        marginLeft: 20
    },
    headerContent: {
        flexDirection: 'row',        
        justifyContent: 'space-between', 
        alignItems: 'center',       
        paddingHorizontal: '5%',    
        height: '100%',             
      },
    blueContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 300,
        backgroundColor: '#21AEF9',
    },
    textBlueCont: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default InicioScreen;
