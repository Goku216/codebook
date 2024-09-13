import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  ProductList,
  ProductDetail,
  Login,
  Register,
  CartPage,
  OrderPage,
  DashboardPage,
  PageNotFound,
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
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};
