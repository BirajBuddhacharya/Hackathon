import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/img/logo.png";
import shopCart from "../assets/icons/shopCart.svg";
import notification from "../assets/icons/notification.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className=" bg-card h-15 mx-20 my-2 rounded-lg px-2  flex justify-between fixed z-10 right-0 left-0 opacity-95">
      <div>
        <img src={logo} className="h-full " />
      </div>
      <div className=" flex items-center gap-3">
        <Link to="/">
          <span className="text-md rounded-xl  h-12 p-4 flex items-center text-white hover:text-primary hover:cursor-pointer">
            Home
          </span>
        </Link>
        <Link to="/menu">
          <span className="text-md h-12 p-4 rounded-xl hover:text-primary hover:cursor-pointer flex items-center text-white">
            Menu
          </span>
        </Link>
        <Link to="/order">
          <span className="text-md h-12 rounded-xl p-4 hover:text-primary hover:cursor-pointer flex items-center text-white">
            Order
          </span>
        </Link>
      </div>
      <div className=" items-center flex items-center gap-4">
        <div className=" flex items-center gap-4">
          <div className="flex items-center rounded-xl ">
            <img src={notification} alt="" className="h-6" />
          </div>
          <div className="flex items-center relative rounded-xl ">
            <img src={shopCart} alt="" className="h-5" />
          </div>
        </div>
        <div>
          {isLogin ? (
            <Link to="/login">
            <div
              onClick={() => setIsLogin(false)}
              className="px-7 py-2 rounded-full text-md text-center text-white bg-primary flex justiy-center items-center  shadow-2xl"
            >
              Login
            </div>
            </Link>
          ) : (
            <button onClick={() => setIsLogin(true)}>
              <RxAvatar />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
