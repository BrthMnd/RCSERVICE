import axios from "axios";

// baseURL: "https://rcservice.onrender.com/api",
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});
export default instance;
