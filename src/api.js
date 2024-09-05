import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const registerUser = (email) => axios.post(`${API_URL}/auth/register`, { email });
export const addAvailability = (availability) => axios.post(`${API_URL}/availability`, availability);
export const scheduleSession = (session) => axios.post(`${API_URL}/sessions`, session);
