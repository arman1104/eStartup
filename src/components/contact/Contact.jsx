import React from "react";
import "./Contact.css";
import { MapPin, Phone, Mail } from "lucide-react";

const contacts = [
  {
    icon: <MapPin />,
    description: "Address",
    text: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: <Phone />,
    description: "Call Us",
    text: "+1 5589 55488 55",
  },
  {
    icon: <Mail />,
    description: "Email Us",
    text: "info@example.com",
  },
];

const Contact = () => {
  return (
    <>
      <div className="contacts-headings">
        <h3>Contact</h3>
        <h1>
          Need Help? <span>Contact Us</span>
        </h1>
      </div>
      <div className="contacts-main-container">
        <div className="contacts-list">
          <ul>
            {contacts.map((item, index) => (
              <li key={index}>
                <span>{item.icon}</span>
                <h3>{item.description}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="input-container">
          <div className="name-email-container">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Subject" className="subject-input" />
          <textarea name="Message" id="area" placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
};
export default Contact;
