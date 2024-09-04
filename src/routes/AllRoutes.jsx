import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProductList } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
      </Routes>
    </>
  );
};
