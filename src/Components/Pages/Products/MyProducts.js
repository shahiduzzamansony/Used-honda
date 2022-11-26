import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MyProductcard from "./MyProductcard";

const MyProducts = () => {
  const products = useLoaderData();
  //   console.log(products);
  return (
    <div className=" my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6">
      {products.length > 0 ? (
        products?.map((product) => (
          <MyProductcard key={product._id} product={product}></MyProductcard>
        ))
      ) : (
        <h2 className="text-4xl text-center">
          You have no products to show.{" "}
          <Link className="text-accent" to="/dashboard/addProduct">
            Add now..
          </Link>
        </h2>
      )}
    </div>
  );
};

export default MyProducts;
