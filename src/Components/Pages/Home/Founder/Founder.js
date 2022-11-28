import React from "react";
import founder from "../../../../assets/founder.JPG";

const Founder = () => {
  return (
    <div>
      <div className="card w-1/3 my-7 mx-auto">
        <figure className="px-10 pt-10">
          <img src={founder} alt="founder" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-accent text-3xl font-semibold">
            Md. Shahiduzzaman
          </h2>
          <p className="text-2xl">Founder</p>
          <p
            className="tooltip text-accent font-semibold"
            data-tip="017000000000"
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
