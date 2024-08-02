import axios from "axios";

const BASE_GET_URL = "http://ctl-cfdev.tcc.co.th:8000/api/auth";
const BASE_POST_URL = "http://ctl-cfdev.tcc.co.th:8000/api/auth";
const HEADERS = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiGet = async (url: string) => {
  try {
    return await axios.get(`${BASE_GET_URL}${url}`, HEADERS);
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }
    return e;
  }
};

export const apiPost = async (url: string, data: any) => {
  try {
    return await axios.post(`${BASE_POST_URL}${url}`, data, HEADERS);
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response?.data;
    }
    return e;
  }
};
