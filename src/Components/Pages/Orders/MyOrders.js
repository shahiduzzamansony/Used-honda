import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(
        `https://used-honda-buy-sell-server.vercel.app/products?buyerEmail=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  const handleReport = (order) => {
    // console.log(id);
    const reportedProduct = { ...order, productId: order._id };
    delete reportedProduct._id;

    fetch(`https://used-honda-buy-sell-server.vercel.app/reported`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      fetch(`https://used-honda-buy-sell-server.vercel.app/products/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: "",
          meetingLocation: "",
          phoneNumber: "",
          buyerName: "",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Deleted");
            refetch();
          }
        });
    }
  };
  if (isLoading) return "Loading...";
  return (
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
      {data?.length > 0 ? (
        data?.map((order) => (
          <MyOrderCard
            key={order?._id}
            order={order}
            handleDelete={handleDelete}
            handleReport={handleReport}
          ></MyOrderCard>
        ))
      ) : (
        <h2 className="text-4xl text-center">
          You have no orders to show.{" "}
          <Link className="text-accent" to="/categories">
            Add now..
          </Link>
        </h2>
      )}
    </div>
  );
};

export default MyOrders;
