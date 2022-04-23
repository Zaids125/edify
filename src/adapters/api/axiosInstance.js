import axios from "axios";
import BASE_URL from "./baseURL";

const baseURL = BASE_URL;

// creating axios instance
const axiosInstance = axios.create({
  baseURL,
});

/*
  axiosInstance is called on every request and we can do some things before the request is send or response is received
  here we are using it to add jwt token if it is present in localStorage before the request is sent.
*/

axiosInstance.interceptors.request.use(function (config) {
  if (localStorage.getItem("token"))
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return config;
});

export default axiosInstance;
