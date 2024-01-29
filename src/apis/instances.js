import axios from 'axios';

export const instance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API, // http://localhost:5173/
});

// method: GET, POST, PUT, DELETE, PATCH
