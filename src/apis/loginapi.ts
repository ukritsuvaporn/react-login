import axios from "axios";

const API_URL = "http://ctl-cfdev.tcc.co.th:8000/api/auth";

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
  };
}

interface LoginResult {
  isSuccess: boolean;
  result: string;
  token: string;
  error?: string;
}

export const loginApi = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResult>(`${API_URL}/login`, {
      username,
      password,
    });
    const returnData = response.data.result as any;
    console.log(returnData);
    //if (returnData) {
    const data: LoginResponse = {
      token: returnData.token,
      user: { id: returnData.user.id, username: returnData.user.name },
    };
    console.log(data);
    return data;
    //  }
  } catch (error) {
    throw new Error("Failed to login");
  }
};
