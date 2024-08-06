import React, { useContext } from "react";
import { CDN_URL } from "./Contants";
import UserContext from "./UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, locality, costForTwo, cuisines } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className=" rounded-lg m-4 p-4 w-[200px] h-96 bg-gray-100 hover:bg-gray-200 mt-5 ">
      <img
        className="rounded-lg w-[200px] h-[20vh]"
        alt="img"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3 className="truncate">{cuisines.join(",")}</h3>
      <h3>{avgRating}</h3>
      <h3>{locality}</h3>
      <h3>{costForTwo}</h3>
      <h3>User : {loggedInUser}</h3>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <p className="text-white mt-5 w-16 text-center bg-black m-1 p-1 mx-7 rounded-lg">
          isOpen
        </p>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
