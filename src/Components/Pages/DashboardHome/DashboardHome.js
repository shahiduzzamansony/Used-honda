import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyOrders from "../Orders/MyOrders";
import MyProducts from "../Products/MyProducts";

const DashboardHome = () => {
  const { loading } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const users = useLoaderData();
  if (user?.role === "Seller") {
    return <MyProducts></MyProducts>;
  }
  if (user?.role === "Buyer") {
    return <MyOrders></MyOrders>;
  }
  if (loading) {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    );
  }
  return <div>{users.map((u) => setUser(u))}</div>;
};

export default DashboardHome;
