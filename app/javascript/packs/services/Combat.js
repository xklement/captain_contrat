import axios from "axios";
import { BASE_URL } from '../utils/constant';

const CombatService = {
  simulateCombat(ids) {
    return axios.post(`${BASE_URL}/combat`, ids);
  },
};

export default CombatService;
