import { useState } from "react";
import Button from "./Button";

export default function Order({ userOrder, setUserOrder }) {
  const [tip, setTip] = useState("0");

  const bill = userOrder.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, 0);
  const totalWithTip = bill + (bill * tip) / 100;

  function handleDelete(foodToDelete) {
    setUserOrder((prevOrder) =>
      prevOrder.filter((food) => food.name !== foodToDelete.name)
    );
  }

  return (
    <div className="order-items">
      {userOrder.length > 0 ? (
        <ul>
          <h3>Your order</h3>
          {userOrder.map((food, i) => (
            <li key={food.name}>
              {food.name} ({food.quantity})
              <span style={{ float: "right" }}>
                ${food.price * food.quantity}
                <Button onClick={() => handleDelete(food)}> Delete</Button>
              </span>
            </li>
          ))}
          <select value={tip} onChange={(e) => setTip(e.target.value)}>
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>{" "}
          <span> % tip</span>
          <h4>Total: ${totalWithTip}</h4>
        </ul>
      ) : (
        <p>Start adding to your order! ☕</p>
      )}
    </div>
  );
}
