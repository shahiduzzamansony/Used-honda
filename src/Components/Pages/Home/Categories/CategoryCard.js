import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { type, image } = category;
  return (
    <div>
      <div className="card shadow-xl">
        <figure className=" pt-10">
          <img src={image} alt="" className="rounded-xl h-14" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{type}</h2>
          <div className="card-actions">
            <Link
              to={{
                pathname: `/products/${type}`,
              }}
            >
              <button className="btn btn-ghost btn-sm">Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
