import React from "react";
import "./Services.css";
import {
  Activity,
  Radio,
  CalendarRange,
  MessageSquareText,
} from "lucide-react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { PiPresentation } from "react-icons/pi";

const servicesData = [
  {
    icon: <Activity size={"28px"} />,
    description: "Nesciunt Mete",
    text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: <Radio size={"28px"} />,
    description: "Eosle Commodi",
    text: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: <PiPresentation size={"25px"} />,
    description: "Ledo Markt",
    text: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: <BsBoundingBoxCircles size={"23px"} />,
    description: "Asperiores Commodit",
    text: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    icon: <CalendarRange size={"25px"} />,
    description: "Velit Doloremque",
    text: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    icon: <MessageSquareText size={"25px"} />,
    description: "Dolori Architecto",
    text: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

const Services = () => {
  return (
    <div className="service-main-container">
      <div className="headings-container">
        <h3>services</h3>
        <h1>
          Check Our <span>Services</span>
        </h1>
      </div>
      <div className="service-card">
        {servicesData.map((item, index) => (
          <div key={index} className="cards">
            <div className="icon-container">{item.icon}</div>
            <h3>{item.description}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
