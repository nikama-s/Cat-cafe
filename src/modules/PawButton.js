import Paw from "../images/Paw.png";
export default function PawButton({ children, onClick }) {
  return (
    <div className="paw-item">
      <button className="paw-button" onClick={onClick}>
        <img src={Paw} alt="paw" />
      </button>
      <p>{children}</p>
    </div>
  );
}
