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
  const categoryCaptions = {
    hotDrinks: {
      heading: "Hot Drinks",
      imgSrc: CoffeeCup,
      altText: "Coffee cup",
    },
    coldDrinks: {
      heading: "Cold Drinks",
      imgSrc: Lemonade,
      altText: "Lemonade cup",
    },
    desserts: { heading: "Desserts", imgSrc: CupCake, altText: "Cupcake" },
  };

  const caption = () => {
    const { heading, imgSrc, altText } = categoryCaptions[chosenCategory];
    return (
      <>
        <h3>{heading}</h3>
        <img src={imgSrc} alt={altText} />
      </>
    );
  };

  function handleAddToOrder(food) {
    const { name, price } = food;
    setUserOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === name);
      if (existingItem) {
        return prevOrder.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevOrder, { name, price, quantity: 1 }];
    });
  }

  return (
    <div className="food-items">
      <ul>
        {caption()}
        {foodsData[chosenCategory].map((food, i) => (
          <li key={food.name}>
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
