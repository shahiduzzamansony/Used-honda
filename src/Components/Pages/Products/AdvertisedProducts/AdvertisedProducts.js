import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedProductCard from "./AdvertisedProductCard";

const AdvertisedProducts = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["advertisedProducts"],
    queryFn: () =>
      fetch(`http://localhost:5000/products?isAdvertised=advertised`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return <h1>Loading..........</h1>;
  }

  return (
    <div>
      <h2 className="text-center text-red-600 text-4xl font-semibold my-16">
        Featured Products
      </h2>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((d) => (
          <AdvertisedProductCard
            key={d._id}
            product={d}
          ></AdvertisedProductCard>
        ))}
      </div>
    </div>
  );
};

export default AdvertisedProducts;
