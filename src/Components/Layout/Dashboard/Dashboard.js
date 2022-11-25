import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    users.map((u) => setUser(u));
  }, []);
  const { data: users = [] } = useQuery({
    queryKey: ["usersData"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });
  console.log(users);
  return (
    <div>
      {/* {users?.map((u) => setUser(u))} */}
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
            {user?.role === "Seller" && (
              <>
                <li>
                  <Link>My Orders</Link>
                </li>
              </>
            )}
            {user?.role === "Buyer" && (
              <>
                <li>
                  <Link>My Products</Link>
                </li>
                <li>
                  <Link>Add a Product</Link>
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