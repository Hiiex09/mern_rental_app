import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// No Authorization header injection here — auth uses httpOnly cookies.
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;