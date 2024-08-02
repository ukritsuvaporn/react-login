import axios from "axios";

const API_URL = "http://ctl-cfdev.tcc.co.th:8000/api/auth";

//interface for the Helper
interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

//helper config
const postConfig: Params = {
  baseUrl: API_URL,
  headers: {
    Authorization: "",
  },
  method: "post",
};

export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${url}`,
    data,
  })
    .then((response) => {
      //console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      // console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

//config for get request note that the method as changed to get this is very important
const getConfig: Params = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "",
  },
  method: "get",
};

export const getAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${url}/${data}`,
  })
    .then((response) => {
      //console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      //console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
