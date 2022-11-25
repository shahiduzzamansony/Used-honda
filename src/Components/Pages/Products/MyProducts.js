import React from "react";
import { useLoaderData } from "react-router-dom";
import MyProductcard from "./MyProductcard";

const MyProducts = () => {
  const products = useLoaderData();
  return (
    <div className=" my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6">
      {products.map((product) => (
        <MyProductcard key={product._id} product={product}></MyProductcard>
      ))}
    </div>
  );
};

export default MyProducts;
