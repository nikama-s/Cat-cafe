import { useState } from "react";
import Foods from "./Foods";
const foodsData = {
  hotDrinks: [
    { name: "Tea", price: "5" },
    { name: "Coffee", price: "5" },
    { name: "Latte", price: "5" },
    { name: "Espresso", price: "5" },
    { name: "Cappuccino", price: "5" },
    { name: "Mocha", price: "5" },
  ],
  coldDrinks: [
    { name: "Iced Coffee", price: "5" },
    { name: "Smoothie", price: "5" },
    { name: "Milkshake", price: "5" },
    { name: "Lemonade", price: "5" },
    { name: "Iced Tea", price: "5" },
    { name: "Cola", price: "5" },
  ],
  desserts: [
    { name: "Cake", price: "5" },
    { name: "Brownie", price: "5" },
    { name: "Cheesecake", price: "5" },
    { name: "Ice Cream", price: "5" },
    { name: "Cupcake", price: "5" },
    { name: "Muffin", price: "5" },
  ],
};

export default function Menu({ userOrder, setUserOrder }) {
  const [chosenCategory, setChosenCategory] = useState("hotDrinks");
  return (
    <div className="menu-container">
      <div className="categories">
        <button onClick={() => setChosenCategory("hotDrinks")}>
          Hot Drinks
        </button>
        <button onClick={() => setChosenCategory("coldDrinks")}>
          Cold Drinks
        </button>
        <button onClick={() => setChosenCategory("desserts")}>Desserts</button>
      </div>
      <Foods
        foodsData={foodsData}
        chosenCategory={chosenCategory}
        userOrder={userOrder}
        setUserOrder={setUserOrder}
      />
    </div>
  );
}
