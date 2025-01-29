import React from "react";

export default function Menu() {
  const card = [
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Classic Cheeseburger",
      price: "$8.99",
      description:
        "Juicy beef patty with melted cheese, lettuce, and tomato. djhsdhsh sdjfhdfh shfgsd hdfhdflk hvdhjvdj jshjdh",
      FoodResult: "Fast Food",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Pepperoni Pizza",
      price: "$12.99",
      description: "Thin-crust pizza topped with pepperoni and mozzarella.",
      FoodResult: "Italian",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Salmon Sushi Roll",
      price: "$14.99",
      description: "Fresh salmon with rice and seaweed, served with soy sauce.",
      FoodResult: "Japanese",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Spaghetti Carbonara",
      price: "$10.99",
      description: "Creamy pasta with crispy bacon and parmesan cheese.",
      FoodResult: "Italian",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Spicy Chicken Taco",
      price: "$7.99",
      description: "Soft tortilla filled with spicy grilled chicken and salsa.",
      FoodResult: "Mexican",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Caesar Salad",
      price: "$6.99",
      description: "Fresh romaine lettuce with Caesar dressing and croutons.",
      FoodResult: "Healthy",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Grilled Ribeye Steak",
      price: "$19.99",
      description:
        "Tender ribeye steak grilled to perfection, served with fries.",
      FoodResult: "Steakhouse",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Chocolate Ice Cream",
      price: "$4.99",
      description: "Rich chocolate ice cream with a creamy texture.",
      FoodResult: "Dessert",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      name: "Tomato Basil Soup",
      price: "$5.99",
      description: "Warm tomato soup with fresh basil and a hint of garlic.",
      FoodResult: "Soup",
    },
    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
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
    <main>
      <div className="flex m-10 relative h-screen">
        {/* Sidebar (Scrollable) */}
        <div className=" scrollable-container w-[20%] h-screen flex  flex-col bg-zinc-300 gap-4 px-3 fixed left-0 overflow-y-auto ">
          <h1 className="font-bold text-2xl">Food Menu</h1>
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <button className="p-2 px-4 rounded-lg border border-zinc-800 bg-zinc-100  w-full hover:bg-zinc-400 bg-pink-100">
                {item.label}
              </button>
            </div>
          ))}
        </div>

        {/* Food Items Section (Scrollable) */}
        <div className="w-[80%] ml-[20%] bg-zinc-300 flex flex-wrap gap-3 p-4 h-screen scrollable-container overflow-y-auto  ">
          {card.map((item, index) => (
            <div
              key={index}
              className="flex bg-zinc-300 h-90 px-2 py-4 w-80 flex-col items-center rounded-lg gap-3 border border-zinc-800 hover:border-zinc-500 shadow-2xl"
            >
              <img src={item.img} alt="" className="w-78 rounded-lg" />
              <div className="w-78 flex flex-col gap-2">
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
                <button className="bg-black text-white p-2 px-4 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
