import axios from 'axios';
const IP = "192.168.1.13"

export const registerVet = async (vet) => {
    const response = axios.post(`http://${IP}:3000/api/vets`, vet)
    return response.data
}

export const getHorses = async () => {
    const res = await axios.get(`http://${IP}:3000/api/horse`)
    return res.data
}
