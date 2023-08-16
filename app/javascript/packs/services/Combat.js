import axios from "axios";
const BASE_URL = "/api/v1";

const CombatService = {
  simulateCombat(ids) {
    return axios.post(`${BASE_URL}/combat`, ids);
  },
};

export default CombatService;
