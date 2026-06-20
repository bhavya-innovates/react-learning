import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const urls = [
        "https://fakerestaurantapi.runasp.net/api/Restaurant/" + resId,
        "https://fakerestaurantapi.runasp.net/api/Restaurant/" +
          resId +
          "/menu",
      ];

      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((res) => res.json()));

      console.log(data);
      setResMenu(data);
    } catch (err) {
      console.error(
        "Failed to load menu details. Restaurant with the given Id not found.",
        err,
      );
    }
  };

  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="">
      <h1>{resMenu[0]?.restaurantName}</h1>
      <h4>{resMenu[0]?.address}</h4>
      <p>
        <strong>{resMenu[0]?.type}</strong>
      </p>
      <h3>Menu</h3>
      <ul className="menu-items">
        {resMenu[1].map((item) => (
          <li key={item.itemID}>
            <p>{item.itemName}</p>
            <img className="item-img" src={item?.imageUrl} />
            <p>{item.itemDescription}</p>
            <p>₹{item.itemPrice}</p>
          </li>
        ))}
      </ul>
      {/* <ul>
        {resMenu[1].map((item) => (
          <li key={item.itemID}>{item.itemName}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
