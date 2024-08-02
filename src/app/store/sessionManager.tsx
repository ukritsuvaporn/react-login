import { User } from "../view/loginForm";

export const saveToken = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const saveUser = (userData: User) => {
  sessionStorage.setItem("user", JSON.stringify(userData));
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const getUser = () => {
  return sessionStorage.getItem("user");
};

export const removeSessionToken = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const isUserLoggedIn = () => {
  return sessionStorage.getItem("token") !== null;
};
