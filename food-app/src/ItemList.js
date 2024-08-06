import React from "react";
import { CDN_URL } from "./Contants";
import {addItem} from "./cartSlice.js"
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
const dispatch=useDispatch();
  // console.log(items);
  const handleAddItem=(item)=>{
     dispatch(addItem(item))
  }
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-b-2 border-gray-200 text-left flex"
            >
              <div className="w-9/12 pt-6 ">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
                <p className="text-xs pt-8">{item?.card?.info?.description}</p>
              </div>

              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg " onClick={()=>handleAddItem(item)}>
                    Add +
                  </button>
                </div>
                <img
                  className="w-full"
                  src={CDN_URL + item.card.info.imageId}
                ></img>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
