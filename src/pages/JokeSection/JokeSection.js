import "./JokeSection.css";
import GetJokeButton from "../../components/GetJokeButton/GetJokeButton";
import { FaInstagram, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from "react-reveal/Slide";


const getRandomJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};
/////
const JokeSection = () => {
  const [url, setUrl] = useState(null);

  const getJoke = async () => {
    const url = await getRandomJoke();
    setUrl(url);
  };

  const style = { color: "#302854", fontSize: "0.8rem" };
  return (
    <div className="searchMainSection">
      <Slide bottom>
        <div className="firstSection">
          <div className="lineSecion"></div>
          <h1 id="funsection">FUNSECTION</h1>
        </div>
      </Slide>

      <div className="animeSection">
        <h1>
          Make your every day <br />
          <span className="purple">more </span>valuable
          <span className="purple"> .</span>
        </h1>
      </div>
      <div className="secound-Section">
        <div className="searchSection">
          <h1>
            Wanna
            <br />
            Read Something Funny
          </h1>
          <p>Press the button to generate a Dad joke</p>
          <GetJokeButton getJoke={getJoke} />
          <span className="jokeContent">{url}</span>
        </div>
      </div>
      <Slide top>
        <div className="third-Section">
          <h1>JOIN US</h1>
          <div className="line"></div>
          <div className="socialMediaIcons">
            <li>
              <FaDribbble style={style} />
            </li>
            <li>
              <FaLinkedinIn style={style} />
            </li>
            <li>
              <FaInstagram style={style} />
            </li>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default JokeSection;
