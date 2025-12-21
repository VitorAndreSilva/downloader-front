import axios from "axios";

const api = axios.create({
    baseURL: 'https://downloader-1-tl0r.onrender.com/api'
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api