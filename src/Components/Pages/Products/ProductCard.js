import React from "react";

const ProductCard = ({ product }) => {
  const { name, img, originalPrice, resalePrice, location } = product;
  return (
    <div>
      <div className="card shadow-xl">
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
            <button className="btn btn-accent btn-xs">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
