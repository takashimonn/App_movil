import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { getHorses } from "../API/API";

const InicioScreen = ({ navigation }) => {
    const [caballos, setCaballos] = useState([]);

    const getData = async () => {
        const data = await getHorses();
        setCaballos(data)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.blueContainer}></View>
            <View style={styles.content}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 300,  // Ajuste para dejar espacio al contenedor azul
    },
    blueContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 300,
        backgroundColor: 'blue',
    },
    animal: {
        width: '90%',
        height: 170,
        borderRadius: 10,
        backgroundColor: 'green',
        marginVertical: 25,
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 10,
    },
    btnHorseName: {
        width: 170,
        height: 40,
        backgroundColor: 'green',
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
});

export default InicioScreen;
