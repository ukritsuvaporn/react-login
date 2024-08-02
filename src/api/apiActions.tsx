import axios from "axios";
import { api } from "./api";

const authApiUrl = `http://${process.env.REACT_APP_URL_API}`;
const userApiUrl = `http://${process.env.REACT_APP_URL_API}/account`;

export const apiUser = async (params: any = {}) => {
  try {
    return await api.get(`${userApiUrl}/GetAllUsers`, params);
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response?.data;
    }
    return e;
  }
};

export const apiAuth = async (params: any = {}) => {
  try {
    return await api.post(`${authApiUrl}/auth/login`, params);
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response?.data;
    }
    return e;
  }
};
