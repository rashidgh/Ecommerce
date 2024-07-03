import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export default AxiosInstance;

export const AxiosInstance2 = axios.create({
  baseURL: "http://localhost:3000",
});
