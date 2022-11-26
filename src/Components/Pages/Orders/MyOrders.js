import { useQuery } from "@tanstack/react-query";
import React from "react";
import MyOrderCard from "./MyOrderCard";

const MyOrders = ({ email }) => {
  //   console.log(email);
  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`http://localhost:5000/booked?email=${email}`).then((res) =>
        res.json()
      ),
  });
  //   console.log(data);
  if (isLoading) return "Loading...";
  return (
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
      {data?.map((order) => (
        <MyOrderCard key={order?._id} order={order}></MyOrderCard>
      ))}
    </div>
  );
};

export default MyOrders;
