import axios from "axios";

const instance = axios.create({
  baseURL: "https://rcservice.onrender.com/api",
  withCredentials: true,
});
export default instance;
