import axios from "axios";

const api = axios.create({
    baseURL:"",
    headers:{
        "Content-Type":"aplication/json",
    }
})

export default api;