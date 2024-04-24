import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const URL = "https://app-movil-lzm2.vercel.app/api"; // Quita "/login" de la URL base

export const registerVet = async (vet) => {
    try {
        // Obtener el token guardado en SecureStore
        const token = await SecureStore.getItemAsync('token');
        if (!token) {
            throw new Error('No se encontró el token en SecureStore');
        }

        // Realizar la solicitud POST con el token en el encabezado
        const response = await axios.post(`${URL}/vets`, vet, {
            headers: {
                'x-access-token': `${token}`
            }
        });
        
        return response.data;
    } catch (error) {
        console.error("Error al registrar veterinario:", error);
        throw error; // Re-lanzar el error para manejarlo en el componente
    }
};

export const getHorses = async () => {
    try {
        // Obtener el token guardado en SecureStore
        const token = await SecureStore.getItemAsync('token');
        if (!token) {
            throw new Error('No se encontró el token en SecureStore');
        }

        // Realizar la solicitud GET con el token en el encabezado
        const response = await axios.get(`${URL}/horse`, {
            headers: {
                'x-access-token': `${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error al obtener los caballos:", error);
        throw error; // Re-lanzar el error para manejarlo en el componente
    }
};
