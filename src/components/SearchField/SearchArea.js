import { FaSearch } from "react-icons/fa";
import "./SearchArea.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Slide from "react-reveal/Slide";

const SearchArea = (props) => {
  const navigate = useNavigate();

  return (
    <div className="bookSearcHeader">
      <Slide left>
        <div className="content">
          <div className="title">
            <button id="homeButton" onClick={() => navigate("/")}>
              <FaArrowLeft />
            </button>
            <h1>
              Find your <br /> best<span className="purple"> book </span>...
            </h1>
            <p>Enter the title of the book in the field</p>
          </div>
          <div className="searchFiled">
            <form onSubmit={props.onSubmit}>
              <input
                onChange={props.onChange}
                type="text"
                placeholder="Title"
                value={props.value}
              />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </Slide>

      <div className="picture"></div>
    </div>
  );
};

export default SearchArea;
