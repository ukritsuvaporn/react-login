import { apiAuth, apiUser } from "../../api/apiActions";

export const authUser = (username: string, password: string) => {
  const userData = {
    Username: username,
    Password: password,
  };
  return apiAuth(userData);
};

export const getUserData = async () => {
  return await apiUser({});
};
