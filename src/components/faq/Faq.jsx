import React, { useState } from "react";
import "./Faq.css";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "1. Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question:
      "2. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
  },
  {
    question: "3. Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.",
  },
  {
    question: "4. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
  },
  {
    question:
      "5. Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>
        Frequently Asked <span>Questions</span>
      </h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleFaq(index)}>
            {item.question}
            <p>
              {openIndex === index ? (
                <Minus size={"20px"} />
              ) : (
                <Plus size={"20px"} />
              )}
            </p>
          </h3>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
