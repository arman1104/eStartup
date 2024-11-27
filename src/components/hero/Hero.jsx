import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero-img.svg";
import { CirclePlay, Presentation, Gem, MapPin, Command } from "lucide-react";

const heroData = [
  { icon: <Presentation size={45} />, text: "Lorem Ipsum" },
  { icon: <Gem size={45} />, text: "Sed ut perspective" },
  { icon: <MapPin size={45} />, text: "Magni Dolores" },
  { icon: <Command size={45} />, text: "Nemo Enim" },
];

const Hero = () => {
  return (
    <>
      {/* main-container start */}
      <div className="hero-main-container">
        {/* hero-container start */}
        <div className="hero-container">
          {/* text-btn-container start */}
          <div className="text-btn-container">
            <h1>
              e<span>Startup</span>
            </h1>
            <p>
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </p>

            {/* btn-container start */}
            <div className="btn-conatainer">
              <button>Get Started</button>
              <div className="play-btn-container">
                <CirclePlay className="icon" size={30} />{" "}
                <span>Watch Video</span>
              </div>
            </div>
            {/* btn-container-end */}
          </div>
          {/* text-btn-container end */}

          {/* hero image */}
          <div className="image-container">
            <img src={HeroImage} alt="hero-img" />
          </div>
        </div>
        {/* hero-container end */}

        {/* card-container start */}
        <div className="card-container">
          {heroData.map((item, index) => (
            <div key={index} className="card">
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        {/* card-container end */}
      </div>
      {/* main-container end */}
    </>
  );
};

export default Hero;
