import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  ProductList,
  ProductDetail,
  Login,
  Register,
  CartPage,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
