import NavBar from "@/components/NavBar";
import AuthLayout from "@/Pages/Auth/AuthLayout";
import ForgotPass from "@/Pages/Auth/ForgotPass";
import Login from "@/Pages/Auth/Login";
import Register from "@/Pages/Auth/Register";
import Home from "@/Pages/Home/Home";
import NotFound from "@/Pages/NotFound/NotFound";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const RoutesLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page1" element={<div>Page 1</div>} />
          <Route path="page2" element={<div>Page 2</div>} />
          <Route path="page3" element={<div>Page 3</div>} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ForgotPass />} />
        </Route>

        {/* Redirect or Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="px-10 py-4">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default RoutesLayout;
