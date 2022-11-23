import React from "react";
import cruiser from "../../../../assets/cruiser-logo.jpg";
import sport from "../../../../assets/sport-logo.png";
import scooter from "../../../../assets/scooter-logo.png";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Cruiser",
      image: cruiser
    },
    {
      id: 2,
      name: "Sport",
      image: sport
    },
    {
      id: 3,
      name: "Scooter",
      image: scooter
    },
  ];

  return <div>
    {
        categories.map(category=>)
    }
  </div>;
};

export default Categories;
