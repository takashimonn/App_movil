import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Creamos el contexto de autenticación
export const AuthContext = createContext();

// Creamos el componente AuthProvider que envuelve la aplicación
export const AuthProvider = ({ children }) => {
    // Estado para almacenar el token de autenticación
    const [token, setToken] = useState(null);
    // Estado para almacenar los datos del usuario
    const [userData, setUserData] = useState(null);
    // Estado para controlar si se ha cargado el estado inicial
    const [isLoading, setIsLoading] = useState(true);

    // Función para iniciar sesión
    const signIn = async (token, userData) => {
        try {
            // Guardamos el token y los datos del usuario en AsyncStorage
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            // Actualizamos el estado de token y userData
            setToken(token);
            setUserData(userData);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    // Función para cerrar sesión
    const signOut = async () => {
        try {
            // Eliminamos el token y los datos del usuario de AsyncStorage
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('userData');
            // Actualizamos el estado de token y userData
            setToken(null);
            setUserData(null);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    // Efecto para cargar el estado inicial al cargar la aplicación
    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                // Obtenemos el token y los datos del usuario de AsyncStorage
                const token = await AsyncStorage.getItem('token');
                const userData = await AsyncStorage.getItem('userData');

                // Si hay un token y datos de usuario, actualizamos el estado
                if (token && userData) {
                    setToken(token);
                    setUserData(JSON.parse(userData));
                }
            } catch (error) {
                console.error('Error al cargar el estado inicial:', error);
            } finally {
                // Indicamos que la carga inicial ha terminado
                setIsLoading(false);
            }
        };

        // Llamamos a la función bootstrapAsync
        bootstrapAsync();
    }, []);

    // Retornamos el contexto de autenticación
    return (
        <AuthContext.Provider value={{ token, userData, signIn, signOut, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
