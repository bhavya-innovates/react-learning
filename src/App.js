import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { CDN_URL } from "./utils/constants";

//React - Create Element => Obeject => HTML Element (render)

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, totalRatingsString, sla, costForTwo } =
    resData.info; //this is destructuring (ES6 feature) to avoid writing resData.info.name, resData.info.cuisines etc.
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="res-name"> {name} </h3>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <div>
        <h4 className="res-rating">
          {avgRating}⭐ {totalRatingsString} ratings
        </h4>
        <h4 className="res-delivery-time"> {sla.slaString} </h4>
        <span className="res-cost-for-two"> {costForTwo} </span>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
