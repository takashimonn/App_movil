import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

const InicioScreen = ({ navigation }) => {
    const [caballos, setCaballos] = useState([]);

    useEffect(() => {
        const obtenerCaballos = async () => {
            try {
                const response = await axios.get('http://192.168.1.15:3000/api/horse');
                setCaballos(response.data);
            } catch (error) {
                console.error("Error al obtener los caballos:", error);
            }
        };

        obtenerCaballos();
    }, []);


    const navigateToAnotherScreen = () => {
        navigation.navigate('NuevoCab');
      };
    

    return (
        <View style={styles.container}>
            {caballos.map(caballo => (
                <View key={caballo._id} style={styles.animal}>
                    <Image
                        source={{ uri: caballo.imageURL }}
                        style={styles.image}
                    />
                    <TouchableOpacity
                        style={styles.btnHorseName}
                        onPress={() => {
                            navigation.navigate('Parametros', { caballoId: caballo._id });
                        }}
                    >
                        <Text style={styles.textBtnHorseName}>{caballo.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>¡Aquí van los veterinarios!</Text>
            <Button title="Ir a otro screen" onPress={navigateToAnotherScreen} />
        </View>
        </View>
        
                        

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    animal: {
        width: '90%',
        height: 170,
        borderRadius: 10,
        backgroundColor: 'green',
        marginVertical: 25,
        marginTop: '10%',
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 10,
        marginLeft: 0,
        marginTop: 0,
    },
    btnHorseName: {
        width: 170,
        height: 40,
        backgroundColor: 'green',
        marginLeft: 0,
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnHorseName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnAgregarCab: {
        position: 'absolute',
        bottom: 30,
        width: 150,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        left: '50%',
        marginLeft: -75,
    },
    textBtnAgregarCab: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default InicioScreen;

