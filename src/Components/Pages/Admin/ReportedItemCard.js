import React from "react";

const ReportedItemCard = ({ reportedItem, handleDelete }) => {
  const { _id, img, name, resalePrice, originalPrice } = reportedItem;
  return (
    <div>
      <div className="card h-60  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-2xl">{name}</h2>
          <p className="text-white">Resale Price: {resalePrice} TK</p>
          <p className="text-white">Original Price: {originalPrice} TK</p>
          <div className="card-actions justify-between">
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

export default ReportedItemCard;
