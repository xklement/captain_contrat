import axios from 'axios';
// import BASE_URL from '../../constants';
const BASE_URL = "/v1";

const WarriorService = {
    getAllWarriors() {
        return axios.get(`/api/v1/warriors`);
    }
};

export default WarriorService;