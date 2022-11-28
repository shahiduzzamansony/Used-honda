import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPages/Login/Login";
import Signup from "../AuthenticationPages/Signup";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import MyBuyers from "../Pages/Admin/MyBuyers";
import MySellers from "../Pages/Admin/MySellers";
import ReportedItems from "../Pages/Admin/ReportedItems";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import Categories from "../Pages/Home/Categories/Categories";
import Home from "../Pages/Home/Home";
import MyOrders from "../Pages/Orders/MyOrders";
import Payment from "../Pages/Orders/Payment/Payment";
import AddProduct from "../Pages/Products/AddProduct";
import MyProducts from "../Pages/Products/MyProducts";
import Products from "../Pages/Products/Products";
import ErrorPage from "../Shared/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:type",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myProducts/:email",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/myBuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/mySellers",
        element: <MySellers></MySellers>,
      },
      {
        path: "/dashboard/reportedItems",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="text-center text-6xl py-64">404 Page Not Found</div>
    ),
  },
]);
export default router;
