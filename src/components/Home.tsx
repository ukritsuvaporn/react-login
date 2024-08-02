import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../app/view/loginForm";
import Wellcome from "../app/view/wellcomePage";

const Login: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/wellcome" element={<Wellcome />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default Login;
