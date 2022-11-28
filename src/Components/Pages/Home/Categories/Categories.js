import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const fetchData = () => {
    return axios
      .get("https://used-honda-buy-sell-server.vercel.app/categories")
      .then((response) => setCategories(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
