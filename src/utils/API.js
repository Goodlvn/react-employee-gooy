import axios from "axios";

const queryUrl = "https://randomuser.me/api/?results=5";

export default {
    getEmployeeData: () => {
        return axios.get(queryUrl)
    }
}
