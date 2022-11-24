import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const { type } = useParams();
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products?type=${type}`)
      .then((res) => res.json())
      .then((data) => setFilterProducts(data))
      .catch((err) => console.error(err));
  }, [type]);
  return (
    <div className=" m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {filterProducts.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
