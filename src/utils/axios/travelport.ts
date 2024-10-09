import axios from "axios";
import Cookies from "js-cookie";

const travelport = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TB_BASEURL,
  headers: {
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("t_token")}`,
    XAUTH_TRAVELPORT_ACCESSGROUP: process.env.NEXT_PUBLIC_ACCESS_GROUP,
  },
});

// An interceptor to dynamically set the Authorization token and Travelport Access Group
travelport.interceptors.request.use(
  (config) => {
    if (Cookies.get("t_token")) {
      config.headers.Authorization = `Bearer ${Cookies.get("t_token")}`;
    }

    if (process.env.NEXT_PUBLIC_ACCESS_GROUP) {
      config.headers["XAUTH_TRAVELPORT_ACCESSGROUP"] =
        process.env.NEXT_PUBLIC_ACCESS_GROUP;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default travelport;
