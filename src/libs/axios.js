import axios from "axios";

const render = "https://rcservice.onrender.com/api";
const localhost = "http://localhost:3000/api";
const instance = axios.create({
  baseURL: localhost,
  withCredentials: true,
});
export default instance;
