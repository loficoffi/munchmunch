import axios from 'axios';
import config from "../config/config.ts"

// Create an axios instance
const api = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to set the Authorization header
export const setAuthToken = (token: any) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;