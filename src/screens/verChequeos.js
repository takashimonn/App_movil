import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const VerChequeos = ({ route }) => {
    const { caballoNombre } = route.params;
    const [chequeos, setChequeos] = useState([]);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const token = await SecureStore.getItemAsync('token');
                console.log('Token de acceso:', token);
                setAccessToken(token);
            } catch (error) {
                console.error('Error al obtener el token de acceso:', error);
            }
        };

        fetchAccessToken();
    }, []);

    useEffect(() => {
        const fetchChequeos = async () => {
            try {
                const response = await axios.get('https://app-movil-lzm2.vercel.app/api/checks', {
                    headers: {
                        'x-access-token': accessToken
                    }
                });
                console.log('Datos de los chequeos:', response.data);
                // Filtrar los chequeos por el nombre del caballo
                const filteredChequeos = response.data.filter(chequeo => chequeo.namehorse === caballoNombre);
                setChequeos(filteredChequeos);
            } catch (error) {
                console.error('Error al obtener los datos de los chequeos del caballo:', error);
            }
        };

        if (accessToken) {
            fetchChequeos();
        }
    }, [accessToken, caballoNombre]);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondo_azul_original.jpg')} style={styles.contBlue}>
                <View style={styles.contWhite}>
                    <Text style={styles.nameHorse}>Chequeos de {caballoNombre}</Text>
                    {chequeos.length > 0 ? (
                        chequeos.map((chequeo, index) => (
                            <View key={index} style={styles.chequeoContainer}>
                                <Text>Medicinas: {chequeo.medicines}</Text>
                                <Text>Especificaciones: {chequeo.specifications}</Text>
                                <Text>Comida: {chequeo.food}</Text>
                                <Text>Herraduras: {chequeo.horseshoes}</Text>
                                <Text>Trabajo: {chequeo.job}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>No hay chequeos para este caballo.</Text>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contBlue: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contWhite: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: '10%',
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 10,
        alignItems: 'center',
    },
    nameHorse: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '10%'
    },
    chequeoContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
});

export default VerChequeos;

