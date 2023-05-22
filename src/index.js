import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import { CookiesProvider } from "react-cookie";
import Header from "./components/Header";
import PrivateRoutes from "./utils";
import Dashboard from "./pages/Dashboard";
import "./style/index.scss";
import Welcome from "./pages/Welcome/index";
import ForgotPwd from "./pages/Pwd-Fgt";
import Footer from "./components/Footer";
import "./firebaseSettings/base/base";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="mot-de-passe-oublie" element={<ForgotPwd />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="home" element={<App />} exact />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
