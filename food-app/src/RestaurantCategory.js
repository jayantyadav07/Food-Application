import React from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data ,showItems,setShowindex}) => {
  console.log("data", data);
 

  const handleclick=(()=>{
    setShowindex(!showItems)
  })
  return (
    <>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto cursor-pointer " onClick={handleclick}>
       <div className="flex justify-between">
       <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
     
        </div> 
     {  showItems && <ItemList items={data.itemCards}/>}
      </div>
     
    </>
  );
};
export default RestaurantCategory;
