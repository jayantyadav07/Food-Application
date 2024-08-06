import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import UserContext from "./UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "./useOnlinestatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantPromoted = withPromtedLabel(RestaurantCard);
  // console.log("hwllo", listOfRestaurants);

  const { setUsername, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const Json = await response.json();
    console.log(Json);

    console.log(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestaurants(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlinestatus();
  if (onlinestatus === false)
    return <h1>Please check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="mx-[4vw] m-1 p-1 border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-3 py-1 m-2 bg-green-100 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
          <input
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <button
            className="px-3 py-1 m-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRating) > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-12">
        {filteredRestaurant.map((Restaurants) => (
          <Link
            key={Restaurants?.info?.id}
            to={"/restaurants/" + Restaurants?.info?.id}
          >
            {Restaurants.info.isOpen ? (
              <RestaurantPromoted resData={Restaurants} />
            ) : (
              <RestaurantCard resData={Restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
