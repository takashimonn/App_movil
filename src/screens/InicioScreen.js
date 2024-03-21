// import React from "react";
// import { View, StyleSheet, Image, Text, TouchableOpacity, Button } from 'react-native';

// const InicioScreen = ({ navigation }) => {
//     return(
//         <View style={styles.container}>
//             <View style={styles.animal}>
//                 <Image 
//                     source={require('../../assets/caballo.jpg')}
//                     style={styles.image}
//                 />

//                 <TouchableOpacity
//                     style={styles.btnHorseName}
//                     onPress={() => {
//                         navigation.navigate('Parametros');
//                     }}
//                 >
//                     <Text style={styles.textBtnHorseName}>Horse Name</Text>
//                 </TouchableOpacity>
//             </View>

//             <TouchableOpacity
//                 style={styles.btnAgregarCab}
//                 onPress={() => {
//                     navigation.navigate('NuevoCaballo'); 
//                 }}
//             >
//                 <Text style={styles.textBtnAgregarCab}>Nuevo</Text>
//             </TouchableOpacity>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     animal: {
//         width: 170,
//         height: 170,
//         borderRadius: 10, 
//         backgroundColor: 'red',
//         marginVertical: 25,
//         marginLeft: 25,
//         marginTop: 25,
//     },
//     image: {
//         width: 170,
//         height: 170,
//         borderRadius: 10, 
//         marginLeft: 0,
//         marginTop: 0,
//     },
//     btnHorseName:{
//         width: 170,
//         height: 40,
//         backgroundColor: 'green',
//         marginLeft: 0,
//         marginTop: 5,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     textBtnHorseName:{
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     btnAgregarCab: {
//         position: 'absolute',
//         bottom: 30,
//         width: 150, 
//         height: 50,
//         backgroundColor: 'green',
//         borderRadius: 10, 
//         alignItems: 'center',
//         justifyContent: 'center',
//         left: '50%', 
//         marginLeft: -75, 
//     },
//     textBtnAgregarCab: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     }
// });

// export default InicioScreen;


import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const InicioScreen = ({ navigation }) => {
    const [caballos, setCaballos] = useState([]);

    useEffect(() => {
        const obtenerCaballos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/horse');
                setCaballos(response.data);
            } catch (error) {
                console.error("Error al obtener los caballos:", error);
            }
        };

        obtenerCaballos();
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
            <TouchableOpacity
                style={styles.btnAgregarCab}
                onPress={() => {
                    navigation.navigate('NuevoCaballo');
                }}
            >
                <Text style={styles.textBtnAgregarCab}>Nuevo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animal: {
        width: 170,
        height: 170,
        borderRadius: 10,
        backgroundColor: 'red',
        marginVertical: 25,
        marginLeft: 25,
        marginTop: 25,
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
