import React from "react";

const MyProductcard = ({ product, handleDelete, handleAdvertise }) => {
  const { _id, img, name, resalePrice } = product;
  return (
    <div>
      <div className="card h-60  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-2xl">{name}</h2>
          <p className="text-white"> price: {resalePrice} TK</p>
          <p className="text-white">Status: {}</p>
          <div className="card-actions justify-between">
            <button
              // disabled={product.isAdvertised}
              onClick={() => handleAdvertise(_id)}
              className="btn btn-accent btn-xs"
            >
              {product?.isAdvertised === "advertised"
                ? "Advertised"
                : "Advertise"}
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-accent btn-xs"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductcard;
