import React from "react";

export default function Menu() {
  const card = [
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Classic Cheeseburger",
      price: "$8.99",
      description:
        "Juicy beef patty with melted cheese, lettuce, and tomato. djhsdhsh sdjfhdfh shfgsd hdfhdflk hvdhjvdj jshjdh",
      FoodResult: "Fast Food",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Pepperoni Pizza",
      price: "$12.99",
      description: "Thin-crust pizza topped with pepperoni and mozzarella.",
      FoodResult: "Italian",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salmon Sushi Roll",
      price: "$14.99",
      description: "Fresh salmon with rice and seaweed, served with soy sauce.",
      FoodResult: "Japanese",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Spaghetti Carbonara",
      price: "$10.99",
      description: "Creamy pasta with crispy bacon and parmesan cheese.",
      FoodResult: "Italian",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Spicy Chicken Taco",
      price: "$7.99",
      description: "Soft tortilla filled with spicy grilled chicken and salsa.",
      FoodResult: "Mexican",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Caesar Salad",
      price: "$6.99",
      description: "Fresh romaine lettuce with Caesar dressing and croutons.",
      FoodResult: "Healthy",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Grilled Ribeye Steak",
      price: "$19.99",
      description:
        "Tender ribeye steak grilled to perfection, served with fries.",
      FoodResult: "Steakhouse",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chocolate Ice Cream",
      price: "$4.99",
      description: "Rich chocolate ice cream with a creamy texture.",
      FoodResult: "Dessert",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Tomato Basil Soup",
      price: "$5.99",
      description: "Warm tomato soup with fresh basil and a hint of garlic.",
      FoodResult: "Soup",
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Cappuccino",
      price: "$3.99",
      description: "Espresso with steamed milk and frothy foam.",
      FoodResult: "Beverage",
    },
  ];

  const menuItems = [
    { id: 1, name: "chicken", label: "Chicken" },
    { id: 2, name: "veg", label: "Vegetarian" },
    { id: 3, name: "fish", label: "Fish" },
    { id: 4, name: "drinks", label: "Drinks" },
    { id: 5, name: "snacks", label: "Snacks" },
    { id: 6, name: "dessert", label: "Dessert" },
    { id: 7, name: "beverage", label: "Beverage" },
    { id: 8, name: "fast_food", label: "Fast Food" },
    { id: 9, name: "momo", label: "Momo" },
    { id: 10, name: "chicken_2", label: "Chicken" },
    { id: 11, name: "veg_2", label: "Vegetarian" },
    { id: 12, name: "fish_2", label: "Fish" },
    { id: 13, name: "drinks_2", label: "Drinks" },
    { id: 14, name: "snacks_2", label: "Snacks" },
    { id: 15, name: "dessert_2", label: "Dessert" },
    { id: 16, name: "beverage_2", label: "Beverage" },
    { id: 17, name: "fast_food_2", label: "Fast Food" },
    { id: 18, name: "momo_2", label: "Momo" },
    { id: 19, name: "chicken_3", label: "Chicken" },
    { id: 20, name: "veg_3", label: "Vegetarian" },
    { id: 21, name: "fish_3", label: "Fish" },
    { id: 22, name: "drinks_3", label: "Drinks" },
    { id: 23, name: "snacks_3", label: "Snacks" },
    { id: 24, name: "dessert_3", label: "Dessert" },
    { id: 25, name: "beverage_3", label: "Beverage" },
    { id: 26, name: "fast_food_3", label: "Fast Food" },
  ];

  return (
    <main className="w-screen h-screen px-20 bg-neutral hideScrollBar">
      <div className="flex relative h-screen">
        {/* Sidebar (Scrollable) */}
        <div className=" scrollable-container w-[20%] bg-card p-5 rounded-xl hideScrollBar h-[30rem] flex flex-col gap-2 px-3 fixed left-12 top-1/2 transform -translate-y-1/2 overflow-y-auto ">
          <div className="font-bold text-black text-xl text-white">Food Menu</div>
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <button className="p-2 rounded-lg  w-full hover:bg-zinc-400 bg-pink-100">
                {item.label}
              </button>
            </div>
          ))}
        </div>

        {/* Food Items Section (Scrollable) */} 
        <div className="w-[80%] h-[80%] overflow-hidden ml-55 mt-23 flex hideScrollBar flex-wrap gap-3 p-4 h-screen scrollable-container overflow-y-auto justify-center ">
          {card.map((item, index) => (
            <div
              key={index}
              className="flex bg-card h-90 px-4 py-4 w-65 flex-col items-center rounded-lg gap-3 border border-zinc-800 hover:border-zinc-500 shadow-2xl"
            >
              <img src={item.img} alt="" className="w-full h-45 rounded-lg" />
              <div className="w-full flex flex-col gap-2 text-left">
                <div className="flex justify-between">
                  <p className="font-semibold font-serif">
                    {item.name.length > 20
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </p>
                  <p>{item.price}</p>
                </div>  
                <div>
                  <p>
                    {item.description.length > 40
                      ? item.description.slice(0, 40) + "..."
                      : item.description}
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-black text-white p-2 px-4 rounded-lg hover:border-primary">
                  Add to Cart
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
