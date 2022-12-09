import "./GetJokeButton.css";
import { FaArrowRight } from "react-icons/fa";


const GetJokeButton = (props) => {


  return (
    <div className="getJokeButton">
      <button onClick={props.getJoke}>
        <FaArrowRight />
      </button>
      <h1>Continue</h1>
    </div>
  );
};

export default GetJokeButton;
