import axios from "axios";

//global config -- base URL
axios.defaults.baseURL = "http://127.0.0.1:3040";

//request interceptor -- do something before sending request to Server
axios.interceptors.request.use((config) => {
  const myToken = localStorage.getItem("myToken");
  //config token if exists
  if (myToken) {
    config.headers = {
      Authorization: myToken,
    };
    return config;
  }
  return config;
});

export default axios;
