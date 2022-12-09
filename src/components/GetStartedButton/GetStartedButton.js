import "./GetStartedButton.css";
import { FaAngleRight } from "react-icons/fa";

const GetStartedButton = () => {
  const arrowStyle = { color: "white" };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="btn">
      <button onClick={scrollToBottom}>Get started</button>
      <h1>Drag on Molang </h1>
      <FaAngleRight style={arrowStyle} />
    </div>
  );
};

export default GetStartedButton;
