import axios from 'axios';

// Vite automatically detect kar leta hai ki app local pe chal rahi hai ya production pe
const isDevelopment = import.meta.env.MODE === 'development';

// Yahan apne hisaab se URLs set kar lo
const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5000/api'        // LOCAL API URL (Node.js/Express jo bhi chal raha ho)
  : 'https://golbal-planet-backend.onrender.com/api'; // PRODUCTION API URL (Live server link)

// Axios ka instance create kar rahe hain
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // Agar backend se cookies/sessions use kar rahe ho toh isko uncomment kar dena
});

export default api;