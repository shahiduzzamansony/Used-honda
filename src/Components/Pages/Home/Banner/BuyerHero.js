import React from "react";
import { Link } from "react-router-dom";
import hayabusa from "../../../../assets/hayabusa.jpg";

const BuyerHero = () => {
  return (
    <div>
      <div
        className="hero lg:h-80 mt-8"
        style={{ backgroundImage: `url(${hayabusa})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-white">
              Are You Looking to Buy a Motorcycle ?
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link>
              <button className="btn btn-accent btn-sm">Search Here</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHero;
