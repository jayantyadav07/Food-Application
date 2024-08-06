import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showindex, setShowindex] = useState(null);
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    // cloudinaryImageId,
    // costForTwo,
    costForTwoMessage,
    // avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log("hwy", categories);
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-10 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")}-{costForTwoMessage}
        </p>
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category.card.card.title}
              data={category?.card?.card}
              showItems={index === showindex ? true : false}
              setShowindex={() => setShowindex(index)}
            />
          );
        })}
      </div>
    </>
  );
};
export default RestaurantMenu;
