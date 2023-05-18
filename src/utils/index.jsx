import React from "react";
import { useCookies } from "react-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [cookies, setCookie] = useCookies(["userToken"]);
  let auth = { token: cookies.userToken };
  return auth.token ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
