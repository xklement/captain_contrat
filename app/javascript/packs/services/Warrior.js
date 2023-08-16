import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const WarriorService = {
    getAllWarriors() {
        return axios.get(`${BASE_URL}/warriors`);
    },
    getOneWarrior(id) {
        return axios.get(`${BASE_URL}/warriors/${id}`);
    },
    createWarrior(data) {
        return axios.post(`${BASE_URL}/warriors`, data);
    },
    editWarrior(id, data) {
        return axios.put(`${BASE_URL}/warriors/${id}`, data);
    },
    deleteWarrior(id) {
        return axios.delete(`${BASE_URL}/warriors/${id}`);
    },
};

export default WarriorService;