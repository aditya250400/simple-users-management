//import axios
import axios from "axios";
import Cookies from "js-cookie";
const Api = axios.create({
  //set default endpoint API
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },

  (error) => {
    if (401 == error.response.status) {
      alert("Sesi anda habis silakan login ulang!");
      window.location.href = "/login";
      Cookies.remove("token");
      Cookies.remove("user");
    } else {
      return Promise.reject(error);
    }
  }
);

export default Api;
