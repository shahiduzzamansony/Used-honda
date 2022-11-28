import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <p className="text-red-500">Something went wrong </p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Please <button onClick={handleLogout}>Sign Out</button> and Log back
        in..
      </h4>
    </div>
  );
};

export default ErrorPage;
