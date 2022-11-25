import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPages/Login/Login";
import Signup from "../AuthenticationPages/Signup";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Products/AddProduct";
import MyProducts from "../Pages/Products/MyProducts";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:type",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myProducts/:email",
        element: <MyProducts></MyProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.email}`),
      },
    ],
  },
]);
export default router;
