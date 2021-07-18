
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import "./styles/Slider.css";
export default function BtnSlider(props) {
    return (
      <button
        onClick={props.move}
        className={props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img alt = "setup" src={props.direction === "next" ? rightArrow : leftArrow} />
      </button>
    );
  }
  