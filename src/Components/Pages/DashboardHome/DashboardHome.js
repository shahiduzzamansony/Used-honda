import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useRole from "../../Hooks/useRole";
import MyBuyers from "../Admin/MyBuyers";
import MyOrders from "../Orders/MyOrders";
import MyProducts from "../Products/MyProducts";

const DashboardHome = () => {
  const { loading, user } = useContext(AuthContext);
  const [isSeller, isBuyer, isAdmin] = useRole(user?.email);

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
  return (
    <div>
      {isSeller && <MyProducts></MyProducts>}
      {isBuyer && <MyOrders></MyOrders>}
      {isAdmin && <MyBuyers></MyBuyers>}
    </div>
  );
};

export default DashboardHome;
