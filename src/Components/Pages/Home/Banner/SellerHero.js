import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ktm from "../../../../assets/ktm.jpg";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";

const SellerHero = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useRole(user?.email);
  // console.log(isSeller);

  return (
    <div>
      <div className="hero lg:h-96" style={{ backgroundImage: `url(${ktm})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-white">
              Are You Tensed about Selling Your Motorcycle ?
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/dashboard/addProduct">
              {
                <button disabled={!isSeller} className="btn btn-accent btn-sm">
                  Add Product
                </button>
              }
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHero;
