import React from "react";
import cruiser from "../../../../assets/cruiser-logo.jpg";
import sport from "../../../../assets/sport-logo.png";
import scooter from "../../../../assets/scooter-logo.png";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: 1,
      type: "Cruiser",
      image: cruiser,
    },
    {
      id: 2,
      type: "Sport",
      image: sport,
    },
    {
      id: 3,
      type: "Scooter",
      image: scooter,
    },
  ];

  return (
    <div>
      <div className="my-14">
        <h2 className="text-5xl text-red-600 font-semibold text-center mb-4">
          Categories
        </h2>
        <h3 className="text-xl text-center">
          We have multiple items under each category. Click on products and
          check those out.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
