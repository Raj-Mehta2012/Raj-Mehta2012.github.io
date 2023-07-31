import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raj Mehta </span>
            from <span className="purple"> Boston, MA.</span>
            <br /> 🎓 Currently pursuing a Master’s degree in Information Systems at Northeastern University, Boston. 🎓
            <br />
            Relevant Coursework: Advanced Data Science, Big Data and Intelligence Analysis, Application Engineering, Cryptocurrency & Smart Contracts, etc.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
