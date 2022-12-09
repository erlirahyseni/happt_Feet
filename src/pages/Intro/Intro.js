import "./Intro.css";
import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import GetStartedButton from "../../components/GetStartedButton/GetStartedButton";
import Typewriter from "typewriter-effect";
import JokeSection from "../../pages/JokeSection/JokeSection";
import Footer from "../Footer/Footer";
import Slide from "react-reveal/Slide";

const Intro = () => {
  const iconStyle = { color: "#898989" };

  const styles = {
    bounce: {
      animationName: "bounce",
      animationDuration: "1s",
    },
  };

  return (
    <div className="intro">
      <Slide bottom>
        <div className="firstSection">
          <div className="line"></div>
          <h1>FUNSECTION</h1>
        </div>
      </Slide>
      <div className="secoundSection">
        <div className="titleSection">
          <h2 className="number">01</h2>

          <div className="title">
            <Typewriter
              options={{
                strings: ["EXPLORE MORE"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="description">
            Cheer up your mode with jokes and <br />
            good books .
          </p>
        </div>
        <GetStartedButton />
        <Slide left cascade>
          <div className="socialMedia">
            <h1>Follow us</h1>
            <div className="line"></div>
            <div className="icons">
              <li>
                <FaDribbble style={iconStyle} />
              </li>
              <li>
                <FaLinkedinIn style={iconStyle} />
              </li>
              <li>
                <FaInstagram style={iconStyle} />
              </li>
            </div>
          </div>
        </Slide>
      </div>
      <div className="thirdSection">
        <iframe
          src="https://my.spline.design/molang3dcopy-38c54b87abc3942f6f00e86a10a81afb/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <JokeSection />
      <Footer />
    </div>
  );
};

export default Intro;
