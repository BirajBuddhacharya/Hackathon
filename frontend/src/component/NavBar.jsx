import React from "react";
import { SlBasket } from "react-icons/sl";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <main className=" bg-zinc-800 mx-10 my-2 ">
      <div>
        <div> </div>
        <div>
          <span> Home </span>
          <span>Menu</span>
          <span>Order</span>
        </div>
        <div>
          <div>
            <SlBasket />
          </div>
          <div>
            <MdOutlineNotificationsActive />
          </div>
        </div>
        <div>
          {isLogin ? (
            <button onClick={() => setIsLogin(false)}>Logout</button>
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
