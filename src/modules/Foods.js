import CoffeeCup from "../images/CofeeCup.png";
import Lemonade from "../images/Lemonade.jpg";
import CupCake from "../images/CupCake.jpg";
import Button from "./Button.js";

export default function Foods({
  foodsData,
  chosenCategory,
  userOrder,
  setUserOrder,
}) {
  function caption() {
    if (chosenCategory === "hotDrinks") {
      return (
        <>
          <h3>Hot drinks</h3>
          <img src={CoffeeCup} alt="coffee cup"></img>
        </>
      );
    } else if (chosenCategory === "coldDrinks") {
      return (
        <>
          <h3>Cold Drinks</h3>
          <img src={Lemonade} alt="lemonade cup"></img>
        </>
      );
    } else {
      return (
        <>
          <h3> Desserts </h3>
          <img src={CupCake} alt="Cupcake"></img>
        </>
      );
    }
  }

  function handleAddToOrder(food) {
    setUserOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === food.name);

      if (existingItem) {
        return prevOrder.map((item) =>
          item.name === food.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevOrder,
          { name: food.name, price: food.price, quantity: 1 },
        ];
      }
    });
  }
  return (
    <div className="food-items">
      <ul>
        {caption()}
        {foodsData[chosenCategory].map((food, i) => (
          <li key={i}>
            {food.name}
            <span style={{ float: "right" }}>
              ${food.price}
              <Button onClick={() => handleAddToOrder(food)}>Order</Button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
