import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useRole from "../../Hooks/useRole";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isSeller, isBuyer, isAdmin] = useRole(user?.email);
  console.log(isSeller, isBuyer);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <li className="text-xl font-semibold">
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li className="text-xl font-semibold">
                  <Link to={`/dashboard/myProducts/${user?.email}`}>
                    My Products
                  </Link>
                </li>
                <li className="text-xl font-semibold">
                  <Link to="/dashboard/addProduct">Add a Product</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="text-xl font-semibold">
                  <Link to={`/dashboard/myBuyers`}>My Buyers</Link>
                </li>
                <li className="text-xl font-semibold">
                  <Link to={`/dashboard/mySellers`}>My Sellers</Link>
                </li>
                <li className="text-xl font-semibold">
                  <Link to={`/dashboard/reportedItems`}>Reported Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
