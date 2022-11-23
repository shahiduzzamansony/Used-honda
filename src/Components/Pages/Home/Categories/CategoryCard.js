import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <div className="card shadow-xl">
        <figure className=" pt-10">
          <img src={category.image} alt="" className="rounded-xl h-14" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category.category}</h2>
          <div className="card-actions">
            <button className="btn btn-ghost btn-sm">Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
