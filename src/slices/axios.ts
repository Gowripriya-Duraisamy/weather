import axios, { Canceler } from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall"
});

export default axiosInstance;
