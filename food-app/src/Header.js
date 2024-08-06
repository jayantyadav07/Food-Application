import React, { useContext, useState } from "react";
import { LOGO } from "./Contants";
import { BrowserRouter as Router, Link } from "react-router-dom";
import useOnlinestatus from "./useOnlinestatus";
import UserContext from "./UserContext";
import{useSelector} from "react-redux"
const Header = () => {
  const [reactbutton, setReactbutton] = useState("login");
  
  const onlinestatus = useOnlinestatus();
  const{loggedInUser}=useContext(UserContext)
  //suscribing to the store using a selector
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div>
      <div className="flex justify-between shadow-lg m-2 h-[15vh]">
        <div className="logo-container">
          <img className="w-[7vw]  items-center" src={LOGO}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">status:{onlinestatus ? "✅" : "🛑"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/About">About</Link>
            </li>

            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
        
            <li className="px-4 font-bold">
              <Link to="/Cart">cart - {cartItems.length} items</Link>
            </li>

            <button className="px-4"
              onClick={() => {
                reactbutton === "login"
                  ? setReactbutton("Logout")
                  : setReactbutton("login");
              }}
            >
              {reactbutton}
            </button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
