import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res?.info?.avgRating >= 4),
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-cards-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
