import "./Footer.css";
import ScrollUpButton from "../../components/ScrollTopButton/ScrollTopButton";
import NavigateButton from "../../components/NavigateButton/NavigateButton";
import Flip from "react-reveal/Flip";


const Footer = () => {
  return (
    <div className="bookSection">

      <Flip right>
        <div className="content">
          <h1>
            <span className="purple">happyFeet . </span>
            <br />
            Will suggest you some books <br />
            that you can read{" "}
          </h1>
          <NavigateButton />
        </div>
      </Flip>
      <div className="scrollButtonSection">
        <div>
          <h1>happyFeet @2022 All rights reserved</h1>
        </div>
        <ScrollUpButton />
      </div>{" "}
    </div>
  );
};

export default Footer;
