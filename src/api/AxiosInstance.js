import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export default AxiosInstance;

export const AxiosInstance2 = axios.create({
  baseURL: "http://localhost:3000",
});

export const AxiosInstance3 = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/auth",
});

