import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPages/Login/Login";
import Signup from "../AuthenticationPages/Signup";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
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
]);
export default router;
