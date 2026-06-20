import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    costForTwo,
  } = resData?.info; //this is destructuring (ES6 feature) to avoid writing resData.info.name, resData.info.cuisines etc.

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <Link to={"/restaurant/" + resData?.info?.id}>
        <h3 className="res-name"> {name} </h3>
      </Link>
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

export default RestaurantCard;
