import React from "react";
import banner from "../../../../assets/banner-img.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div
        className="hero h-full"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" max-w-md">
            <div className="animation">
              <h1 className="mb-5 font-bold text-white">
                <span className="first text-4xl">Welcome to</span>
                <span className="slide">
                  <span className="second text-7xl ">
                    {" "}
                    <span className="text-red-600">Moto</span>Land
                  </span>
                </span>
              </h1>
            </div>
            <p className="mb-5 text-white text-lg">
              We provide best rate and secure transaction in town. You can check
              anywhere. Trust us and enjoy the best dealings.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
