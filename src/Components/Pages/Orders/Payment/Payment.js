import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>pay here</h2>
    </div>
  );
};

export default Payment;
