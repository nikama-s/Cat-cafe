import PawButton from "./PawButton";

export default function Options({ onShow, whatIsShown }) {
  return (
    <div className="options">
      <PawButton onClick={() => onShow(whatIsShown === "menu" ? null : "menu")}>
        Menu
      </PawButton>
      <PawButton
        onClick={() => onShow(whatIsShown === "about" ? null : "about")}
      >
        About us
      </PawButton>
      <PawButton
        onClick={() => onShow(whatIsShown === "order" ? null : "order")}
      >
        Your order
      </PawButton>
    </div>
  );
}
