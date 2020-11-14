// import axios from "axios";

// const BASE_URL = "https://dummyapi.io/data/api";
// const APP_ID = "5faf784566b02564a5b20b6e";

const API = {
    // grabEmployees: () => {
    //     return axios.get(`${BASE_URL}/user?limit=10`, { headers: { "app-id": APP_ID } })
    // } 

    grabEmployees: () => {
        const tempData = [
            {
                firstName: "Greg",
                lastName: "Tanaka"
            },
            {
                firstName: "Sam",
                lastName: "Tavera"
            },
            {
                firstName: "Michael",
                lastName: "Brunwhich"
            },

        ];

        return tempData;
    }

};

export default API;

