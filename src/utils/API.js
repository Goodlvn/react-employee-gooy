import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "5faf4b868e9f897227f0e33e";

const API = {
    grabEmployees: () => {
        return axios.get(`${BASE_URL}/user?limit=30`, { headers: { "app-id": APP_ID } })
    } 
};

export default API;

