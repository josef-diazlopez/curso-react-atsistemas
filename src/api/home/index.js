import axios from "axios";
import { API_BASE_URL } from "../../config";

export default {
  getTemps,
  getChars,
  getMurderers
};

function getTemps(){
    return axios.get(`${API_BASE_URL}episodes?series=Breaking+Bad`);
}

function getChars(){
    return axios.get(`${API_BASE_URL}characters?category=Breaking+Bad`);
}

function getMurderers(){
    return axios.get(`${API_BASE_URL}deaths`);
}
