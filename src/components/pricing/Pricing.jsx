import React from "react";
import "./Pricing.css";
import { Box, Send, Plane, Rocket } from "lucide-react";

const pricingOptions = [
  {
    title: "Free Plan",
    price: "$0",
    icon: <Box size={"3rem"} style={{ color: "#28CB9B" }} />,
    titleColor: "#28CB9B",
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
  {
    title: "Starter Plan",
    price: "$19",
    icon: <Send size={"3rem"} style={{ color: "#0DCAF0" }} />,
    titleColor: "#0DCAF0",
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
  {
    title: "Business Plan",
    price: "$29",
    icon: <Plane size={"3rem"} style={{ color: "#FD7E14" }} />,
    titleColor: "#FD7E14",
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
  {
    title: "Ultimate Plan",
    price: "$49",
    icon: <Rocket size={"3rem"} style={{ color: "#0D6EFD" }} />,
    titleColor: "#0D6EFD",
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
];

const Pricing = () => {
  return (
    <React.Fragment>
      {/* pricing-headings start */}
      <div className="pricing-headings">
        <h3>pricing</h3>
        <h1>
          Check Our <span>Pricing</span>
        </h1>
      </div>
      {/* pricing-headings end */}
      <div className="pricing-main-container">
        {pricingOptions.map((item, index) => (
          <div className="pricing-card" key={index}>
            <h3 style={{ color: item.titleColor }}>
              {item.title}
              {item.title === "Starter Plan" && (
                <span className="featured">Featured</span>
              )}
            </h3>
            <p>
              {item.price} <span> /mo</span>
            </p>
            <div className="pricing-icon">{item.icon}</div>
            <ul>
              {item.features.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Pricing;
