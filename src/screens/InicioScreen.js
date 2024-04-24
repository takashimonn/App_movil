// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
// import { getHorses } from "../API/API";

// const InicioScreen = ({ navigation }) => {
//     const [caballos, setCaballos] = useState([]);

//     const getData = async () => {
//         const data = await getHorses();
//         setCaballos(data)
//     }

//     useEffect(() => {
//         getData()
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.blueContainer}></View>
//             <View style={styles.content}>
//                 {caballos.map(caballo => (
//                     <View key={caballo._id} style={styles.animal}>
//                         <Image
//                             source={{ uri: caballo.imageURL }}
//                             style={styles.image}
//                         />
//                         <TouchableOpacity
//                             style={styles.btnHorseName}
//                             onPress={() => {
//                                 navigation.navigate('Parametros', { caballoId: caballo._id });
//                             }}
//                         >
//                             <Text style={styles.textBtnHorseName}>{caballo.name}</Text>
//                         </TouchableOpacity>
//                     </View>
//                 ))}
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     content: {
//         flex: 1,
//         alignItems: 'center',
//         marginTop: 250, 
//         backgroundColor: 'white',
//         borderRadius: 20
//     },
//     blueContainer: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 300,
//         backgroundColor: '#21AEF9',
//     },
//     animal: {
//         width: '90%',
//         height: 170,
//         borderRadius: 10,
//         backgroundColor: 'green',
//         marginVertical: 25,
//     },
//     image: {
//         width: 170,
//         height: 170,
//         borderRadius: 10,
//     },
//     btnHorseName: {
//         width: 170,
//         height: 40,
//         backgroundColor: 'green',
//         marginTop: 5,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     textBtnHorseName: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default InicioScreen;

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { getHorses } from "../API/API";
import { Ionicons } from '@expo/vector-icons';

const InicioScreen = ({ navigation }) => {
    const [caballos, setCaballos] = useState([]);

    const getData = async () => {
        const data = await getHorses();
        setCaballos(data);
    }

    useEffect(() => {
        getData();
    }, []);


    const navigateToAddCaballo = () => {
        navigation.navigate('NuevoCab');
    }


    return (
        <View style={styles.container}>
            <View style={styles.blueContainer}>
                <Text style={styles.textBlueCont}>Registro de caballos</Text>

                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NuevoCab')}
                    style={styles.addButton}
                    > 
                        <Ionicons name="add" size={30} color="white" />
                </TouchableOpacity>



            
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
                            <Image
                                source={{ uri: caballo.imageURL }}
                                style={styles.image}
                            />
                            <Text style={styles.textBtnHorseName}>{caballo.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 250, 
        backgroundColor: 'white',
        borderRadius: 20
    },
    blueContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 300,
        backgroundColor: '#21AEF9',
    },
    animal: {
        width: 150,
        height: 200,
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
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 15,
        marginBottom: 10,
    },
    addButton: {
        position: 'absolute',
        bottom: 4,
        right: 20,
        backgroundColor: '#21AEF9',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    textBtnHorseName: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textBlueCont: {
        fontSize: 30,
        color: 'white',
        marginTop: 150,
        marginLeft: 20
    }
});

export default InicioScreen;
