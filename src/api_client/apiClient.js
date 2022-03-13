import axios from "axios";
import { store } from "../store/store";
import { isRefreshTokenExpired } from "../reducers/";

export const serverAddress = "";
// This is a dirty hack. Grabs current host for when sharing. URL handling needs cleaned up. DW 12-13-20
export const shareAddress = window.location.host;

export const Server = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 30000,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
});

Server.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    console.error(error);
  }
);

Server.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry && !isRefreshTokenExpired(store.getState())) {
      originalRequest._retry = true;

      const auth = store.getState().auth;
      const refreshToken = auth.refresh.token;
      return Server.post(serverAddress + "/auth/token/refresh/", {
        refresh: refreshToken,
      }).then(async (response) => {
        store.dispatch({
          type: "REFRESH_ACCESS_TOKEN_FULFILLED",
          payload: response.data,
        });
        Server.defaults.headers.common.Authorization = "Bearer " + response.data.access;
        originalRequest.headers.Authorization = "Bearer " + response.data.access;
        if (originalRequest.baseURL === originalRequest.url.substring(0, 5)) {
          originalRequest.baseURL = "";
        }
        return Server(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);
export default { serverAddress, Server, shareAddress };
