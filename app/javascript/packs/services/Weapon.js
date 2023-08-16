import axios from "axios";
import { BASE_URL } from "../utils/constant";

const WeaponService = {
  getAllWeapons() {
    return axios.get(`${BASE_URL}/weapons`);
  },
  getOneWeapon(id) {
    return axios.get(`${BASE_URL}/weapons/${id}`);
  },
  createWeapon(data) {
    return axios.post(`${BASE_URL}/weapons`, data);
  },
  editWeapon(id, data) {
    return axios.put(`${BASE_URL}/weapons/${id}`, data);
  },
  deleteWeapon(id) {
    return axios.delete(`${BASE_URL}/weapons/${id}`);
  },
};

export default WeaponService;
