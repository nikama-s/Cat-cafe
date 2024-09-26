import { useState } from "react";
import Foods from "./Foods";
const foodsData = {
  hotDrinks: [
    { name: "Tea", price: "4" },
    { name: "Americano", price: "3" },
    { name: "Latte", price: "5" },
    { name: "Espresso", price: "4" },
    { name: "Cappuccino", price: "4" },
    { name: "Mocha", price: "5" },
  ],
  coldDrinks: [
    { name: "Iced Latte", price: "5" },
    { name: "Smoothie", price: "6" },
    { name: "Milkshake", price: "4" },
    { name: "Lemonade", price: "4" },
    { name: "Iced Tea", price: "5" },
    { name: "Cola", price: "3" },
  ],
  desserts: [
    { name: "Cake", price: "4" },
    { name: "Brownie", price: "4" },
    { name: "Cheesecake", price: "6" },
    { name: "Ice Cream", price: "5" },
    { name: "Cupcake", price: "3" },
    { name: "Muffin", price: "4" },
  ],
};

export default function Menu({ userOrder, setUserOrder }) {
  const [chosenCategory, setChosenCategory] = useState("hotDrinks");
  const categories = ["hotDrinks", "coldDrinks", "desserts"];

  return (
    <div className="menu-container">
      <div className="categories">
        <button onClick={() => setChosenCategory(categories[0])}>
          Hot Drinks
        </button>
        <button onClick={() => setChosenCategory(categories[1])}>
          Cold Drinks
        </button>
        <button onClick={() => setChosenCategory(categories[2])}>
          Desserts
        </button>
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
