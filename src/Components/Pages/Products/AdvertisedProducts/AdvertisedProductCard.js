import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import useRole from "../../../Hooks/useRole";
import { GoVerified } from "react-icons/go";

const AdvertisedProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { name, img, originalPrice, resalePrice, location, isVerified } =
    product;
  // const [isSeller, isAdmin] = useRole(user?.email);
  return (
    <div>
      <div className="card shadow-xl">
        {isVerified === "Verified" && (
          <GoVerified className="text-blue-700 absolute right-2 top-2" />
        )}
        <figure>
          <img className=" h-60" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Location: {location}</p>
          <div className="flex justify-between">
            <p>
              Original price:
              <br />
              <span className="font-bold text-red-600">
                {" "}
                {originalPrice} TK
              </span>
            </p>
            <p>
              Resale price:
              <br />
              <span className="font-bold text-red-600">{resalePrice} TK</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <label
              // disabled={isSeller || isAdmin}
              //   onClick={() => setModalProduct(product)}
              htmlFor="booknow-modal"
              className="btn btn-accent btn-xs"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProductCard;
