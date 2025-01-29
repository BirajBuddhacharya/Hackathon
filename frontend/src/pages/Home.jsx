import React from "react";
import heroBackground from "../assets/img/heroBackground.jpg";
import rightArrow from "../assets/icons/rightArrow.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="flex flex-col text-black h-screen w-screen justify-center items-center bg-cover bg"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="text-[4rem] font-bold">Tech Food</div>
      <div>Your next lunch is just a click away</div>
      <Link to='/menu'>
        <div className="mt-2 py-3 px-7 bg-primary text-xl text-white rounded-full relative z-10 flex justify-center items-center items-center gap-1">
          <span>Explore Foods</span>
        </div>
      </Link>
    </div>
  );
}
