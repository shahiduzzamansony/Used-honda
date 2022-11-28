import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyProductcard from "./MyProductcard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/products?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });
  // console.log(products);
  //   console.log(products);
  const handleAdvertise = (id) => {
    const agree = window.confirm("Do you want to advertise this product?");
    if (agree) {
      fetch(`http://localhost:5000/products/advertise/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Advertised Successfully");
          } else {
            toast.error("Already advertised");
          }
          refetch();
        });
    }
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted");
            refetch();
          }
        });
    }
  };
  return (
    <div className=" my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6">
      {products.length > 0 ? (
        products?.map((product) => (
          <MyProductcard
            key={product._id}
            product={product}
            handleDelete={handleDelete}
            handleAdvertise={handleAdvertise}
          ></MyProductcard>
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
