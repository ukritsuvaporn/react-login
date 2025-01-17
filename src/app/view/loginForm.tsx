import React, { useEffect, useState } from "react";
import { authUser } from "../auth/userAuth";
import { storeToken } from "../../features/userDataSlice";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { selectGetToken } from "../selectors/tokenSelectors";
import { saveToken, getToken, saveUser } from "../store/sessionManager";
import { useNavigate } from "react-router-dom";
import { showToast } from "../hooks/useToast";
import "react-toastify/dist/ReactToastify.css";

export interface userResponse {
  token: string;
  user: User;
}

export type User = {
  id: string;
  email: string;
  name: string;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = useAppSelector(selectGetToken);

  useEffect(() => {
    if (token === null) {
      const storedToken = getToken();
      if (storedToken !== null) {
        dispatch(storeToken(storedToken));
        navigate("/wellcome");
      }
    }
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await authUser(username, password);
      if (response && response.data?.isSuccess === true) {
        const dataResp = response.data.result as any;

        const userResp: userResponse = {
          token: dataResp.token,
          user: {
            id: dataResp.user.id,
            email: dataResp.user.email,
            name: dataResp.user.name,
          },
        };
        console.log(userResp);
        dispatch(storeToken(userResp.token));
        saveToken(userResp.token);
        saveUser(userResp.user);
        navigate("/wellcome");
        showToast("success", "Login successful!");
      } else if (response && response.data?.isSuccess === false) {
        showToast(
          "error",
          "Login failed. Please check you username and password!"
        );
      } else {
        showToast("error", "Login failed!");
      }
    } catch (err) {
      showToast("error", "Login failed!");
    }
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="usernames" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
