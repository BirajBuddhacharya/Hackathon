import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className=" bg-zinc-800 h-15 mx-10 my-2 rounded-lg px-2  flex justify-between ">
      <div>
        <img
          src="https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg"
          className="h-full "
        />
      </div>
      <div className=" flex items-center">
        <span className="font-bold text-xl  h-12 p-4 hover:border border-zinc-700 hover:border-zinc-500 flex items-center text-white ">
          Home
        </span>
        <span className="font-bold text-xl h-12 p-4 hover:border border-zinc-700 hover:border-zinc-500 flex items-center text-white ">
          Menu
        </span>
        <span className="font-bold text-xl h-12 p-4 hover:border border-zinc-700 hover:border-zinc-500 flex items-center text-white ">
          Order
        </span>
      </div>
      <div className=" flex items-center">
        <div className="p-4 h-12 px-6 flex items-center  border border-zinc-800 hover:border-zinc-500 relative rounded-xl ">
          <SlBasket className="text-3xl text-white " />
          <div className="absolute top-1 right-6 bg-red-500  w-5 h-5 flex items-center justify-center text-white font-semibold text-xs rounded-xl">
            99
          </div>
        </div>
        <div className="p-4  h-12 px-6 flex items-center relative  border border-zinc-800 hover:border-zinc-500 rounded-xl ">
          <MdOutlineNotificationsActive className="text-3xl text-white " />
          <div className="absolute  top-1 right-4 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-semibold text-xs">
            99
          </div>
        </div>
      </div>
      <div className=" items-center flex">
        {isLogin ? (
          <button
            onClick={() => setIsLogin(false)}
            className="px-5 border border-zinc-800 h-12 hover:border-zinc-700 rounded-xl text-xl text-white bg-zinc-700  shadow-2xl hover:bg-zinc-600 w-28 hover:text-2xl "
          >
            Logout
          </button>
        ) : (
          <button onClick={() => setIsLogin(true)}>
            <RxAvatar />
          </button>
        )}
      </div>
    </main>
  );
}
