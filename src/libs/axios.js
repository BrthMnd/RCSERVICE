import axios from "axios";

const instance = axios.create({
  baseURL: "https://rcservice-bvth.onrender.com/api",
  withCredentials: true,
});
export default instance;
