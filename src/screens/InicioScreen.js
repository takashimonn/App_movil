import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
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
        width: 150,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnAgregarCab: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default InicioScreen;
