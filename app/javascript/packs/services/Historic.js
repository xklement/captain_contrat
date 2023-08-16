import axios from "axios";
import { BASE_URL } from '../utils/constant';

const HistoricService = {
  getHitorics() {
    return axios.get(`${BASE_URL}/historics`);
  },
};

export default HistoricService;
