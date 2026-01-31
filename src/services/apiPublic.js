import axios from "axios";

const api = axios.create({
    baseURL: 'https://downloader-1-tl0r.onrender.com/api'
})

export default api