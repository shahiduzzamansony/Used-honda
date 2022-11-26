import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPages/Login/Login";
import Signup from "../AuthenticationPages/Signup";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import Categories from "../Pages/Home/Categories/Categories";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Orders/Payment/Payment";
import AddProduct from "../Pages/Products/AddProduct";
import MyProducts from "../Pages/Products/MyProducts";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

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
        path: "/dashboard/myProducts/:email",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
export default router;
