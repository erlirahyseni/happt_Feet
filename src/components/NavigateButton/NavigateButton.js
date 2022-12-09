import { FaArrowRight } from "react-icons/fa";
import './NavigateButton.css';
import {useNavigate} from 'react-router-dom';

const NavigateButton = () => {
  const navigate = useNavigate();

    return ( 
        <div className="sectionButton">
          <button onClick={() => navigate('/book-search')}>
            <FaArrowRight />
          </button>
          <h1>to Book page</h1>
        </div>
     );
}
 
export default NavigateButton;