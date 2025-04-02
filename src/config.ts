import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com", // Default API URL
  timeout: 10000, // Timeout in milliseconds (10s)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
