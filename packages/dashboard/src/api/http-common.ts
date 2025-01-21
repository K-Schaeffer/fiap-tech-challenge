import axios from "axios";

import { devBank } from "../../api.routes";

const api = axios.create({
  baseURL: devBank,
  headers: {
    "Content-type": "application/json",
  },
});

axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    if (error.request.status === 401) {
      window.alert("Erro 401: interceptors erro 401");
    }
  }
);
export default api;
