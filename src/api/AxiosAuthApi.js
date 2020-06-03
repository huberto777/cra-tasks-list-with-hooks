import Axios from "axios";

const BASE_URL = "http://localhost:5000";
const AxiosAuthenticationAPI = {
  login: async function (credentials) {
    const response = await Axios.post(`${BASE_URL}/login`, credentials);
    const result = response.data;
    return result;
  },
};

export default AxiosAuthenticationAPI;
