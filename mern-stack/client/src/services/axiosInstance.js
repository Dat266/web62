import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/contact",
    timeout: 5000,
});

export default axiosInstance;
