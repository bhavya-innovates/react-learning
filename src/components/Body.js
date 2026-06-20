import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //to handle fresh search everytime
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const res = await data.json(); //gives parsed json data
    const restaurantsData =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  };

  //Conditonal Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredRestaurants = listOfRestaurants.filter((item) =>
                item?.info?.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((res) => res?.info?.avgRating >= 4),
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-cards-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
