import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/css/style.css'
import HomePage from "./Components/HomePage";
import CommonLayout from "./Components/CommonLayout";
import Cart from "./Components/Cart";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<CommonLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
