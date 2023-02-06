import axios from "axios";
import { API_URL } from "../constants";
import { interceptorSuccess, interceptorErrors } from "./interceptors";

axios.interceptors.request.use(
  async (config) => {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Accept-Language"] = "es";
    config.headers["Accept"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = API_URL;
axios.interceptors.response.use(interceptorSuccess, interceptorErrors);

export default axios;
