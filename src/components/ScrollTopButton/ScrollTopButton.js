import { FaAngleUp } from "react-icons/fa";
import './ScrollUpButton.css';

const ScrollUpButton = () => {
    return ( 
        <div className="scrollUp">
            <button    onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} ><FaAngleUp/></button>
        </div>
     );
}
 
export default ScrollUpButton;