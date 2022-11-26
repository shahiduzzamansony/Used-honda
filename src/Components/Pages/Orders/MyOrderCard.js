import React from "react";

const MyOrderCard = ({ order }) => {
  const { itemName, resalePrice, img } = order;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{itemName}</h2>
          <p> price: {resalePrice} TK</p>
          <div className="card-actions justify-between">
            <button className="btn btn-accent btn-xs">Pay</button>
            <button className="btn btn-accent btn-xs">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
