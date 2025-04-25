// src/axiosInstance.js
import axios from "axios";

const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "https://carvanautapi-production.up.railway.app", // Set the base URL for the API
  headers: {
    "Content-Type": "application/json", // Optional: set default headers
    Authorization: token ? `Bearer ${token}` : "", // Ensure token is added only if available
  },
});

export default axiosInstance;
