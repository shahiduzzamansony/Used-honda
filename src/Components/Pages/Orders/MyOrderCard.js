import React from "react";
import { Link } from "react-router-dom";

const MyOrderCard = ({ order, handleDelete, handleReport }) => {
  const { _id, name, resalePrice, img } = order;
  // console.log(order);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p> price: {resalePrice} TK</p>
          <div className="card-actions justify-between">
            {order.paid ? (
              <p className="text-green-600">Paid</p>
            ) : (
              <Link to={`/dashboard/payment/${_id}`}>
                <button className="btn btn-accent btn-xs">Pay</button>
              </Link>
            )}
            <button
              onClick={() => handleReport(order)}
              className="btn btn-accent btn-xs"
            >
              Report
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

export default MyOrderCard;
