import React from "react";
import "./About.css";
import { CircleCheck, MoveRight } from "lucide-react";
import aboutCompany1 from "../../assets/about-company-1.jpeg";
import aboutCompany2 from "../../assets/about-company-2.jpeg";
import aboutCompany3 from "../../assets/about-company-3.jpeg";

const aboutData = [
  {
    title: "who we are",
    heading: "Unleashing Potential with Creative Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      {
        icon: <CircleCheck size={"20px"} />,
        text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        icon: <CircleCheck size={"20px"} />,
        text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      },
      {
        icon: <CircleCheck size={"20px"} />,
        text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur",
      },
    ],
  },
];

const About = () => {
  return (
    // about-main-container start
    <div className="about-main-container">
      {/* aboutData-container start */}
      <div className="aboutData-container">
        {aboutData.map((data, index) => (
          <React.Fragment key={index}>
            <h3>{data.title}</h3>
            <h1>{data.heading}</h1>
            <p>{data.description}</p>
            <ul>
              {data.list.map((item, index) => (
                <li key={index}>
                  {item.icon} <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
        <div className="btn-container">
          <button>
            Read More{" "}
            <span>
              <MoveRight />
            </span>
          </button>
        </div>
      </div>
      {/* aboutData-container end */}

      {/* image-container start */}
      <div className="image-container3">
        <img src={aboutCompany1} alt="image1" className="img1" />
        <div className="image-container2">
          <img src={aboutCompany2} alt="image2" className="img2" />
          <img src={aboutCompany3} alt="image3" className="img3" />
        </div>
      </div>
      {/* image-container end */}
    </div>
    // about-main-container end
  );
};

export default About;
