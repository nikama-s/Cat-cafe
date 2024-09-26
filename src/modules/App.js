import Header from "./header";
import Options from "./Options";
import Menu from "./Menu";
import About from "./About";
import Order from "./Order.js";
import Cat from "../images/Cat (3).png";
import { useState } from "react";

export default function App() {
  const [whatIsShown, setWhatIsShown] = useState(null);
  const [userOrder, setUserOrder] = useState([]);

  return (
    <>
      <Header />
      <Options onShow={setWhatIsShown} whatIsShown={whatIsShown} />
      <div className="main-layout">
        {whatIsShown === "menu" && (
          <Menu userOrder={userOrder} setUserOrder={setUserOrder} />
        )}
        {whatIsShown === "about" && <About />}
        {whatIsShown === "order" && (
          <Order userOrder={userOrder} setUserOrder={setUserOrder} />
        )}
        <div className="cat-image">
          <img src={Cat} alt="cat" />
        </div>
      </div>
    </>
  );
}
