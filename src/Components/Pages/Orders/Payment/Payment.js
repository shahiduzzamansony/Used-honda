import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h2>Payment for {data.name}</h2>
      <p>Paying amount{data.resalePrice}</p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
