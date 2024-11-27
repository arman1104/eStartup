import React from "react";
import "./Features.css";
import { Check } from "lucide-react";
import FeatureImg from "../../assets/feature.svg";

const featues = [
  { icon: <Check size={"20px"} />, text: "Eos aspernatur rem" },
  { icon: <Check size={"20px"} />, text: "Volup amet volupt" },
  { icon: <Check size={"20px"} />, text: "Alias possimus" },
  { icon: <Check size={"20px"} />, text: "Facilis neque ipsa" },
  { icon: <Check size={"20px"} />, text: "Rerum omnis sint" },
  { icon: <Check size={"20px"} />, text: "Repellendus molli" },
];

const Features = () => {
  return (
    <>
      <div className="fetures-headings">
        <h3>features</h3>
        <h1>
          Check Our <span>Features</span>
        </h1>
      </div>
      <div className="featues-main-container">
        <div className="img-container">
          <img src={FeatureImg} alt="features-image" />
        </div>
        <div className="list-container">
          {featues.map((item, index) => (
            <div key={index} className="list-card">
              <span className="list-icon">{item.icon}</span>

              <span className="list-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
