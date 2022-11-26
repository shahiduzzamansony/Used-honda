import React from "react";
import AdvertisedProducts from "../Products/AdvertisedProducts/AdvertisedProducts";
import Banner from "./Banner/Banner";
import BuyerHero from "./Banner/BuyerHero";
import SellerHero from "./Banner/SellerHero";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedProducts></AdvertisedProducts>
      <div className="grid grid-cols-1 md:grid-cols-2 my-14">
        <BuyerHero></BuyerHero>
        <SellerHero></SellerHero>
      </div>
    </div>
  );
};

export default Home;
