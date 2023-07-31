import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import Stock from "../../Assets/Projects/StockSummarizer.jpg";
import Mia from "../../Assets/Projects/meetingIntellignece.jpg";
import Crh from "../../Assets/Projects/clotheshub.jpg";
import Sa from "../../Assets/Projects/crypto.jpg";
import Stockjava from "../../Assets/Projects/StockJava.jpg";
import Xav from "../../Assets/Projects/XaviersUnleashed.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stock}
              isBlog={false}
              title="Stock Analysis Summarizer (Machine Learning model)"
              description="The project aims to provide summary of the analysis articles for a given portfolio of stock tickers. The data is collected from SeekingAlpha, a financial news website that publishes analysis articles on various stocks."
              ghLink="https://github.com/BigDataIA-Spring2023-Team-03/Stock_Analysis_Summarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mia}
              isBlog={false}
              title="Meeting Intelligence Application (AI)"
              description="This tool uses APIs (Whisper API and ChatGPT 3.5 turbo API) from OpenAI to take an audio file as input and transcribe it and answer standard questions, user's custom questions based on the text. It uses Streamlit for the UI and Airflow for the automation."
              ghLink="https://github.com/BigDataIA-Spring2023-Team-03/Assignment4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crh}
              isBlog={false}
              title="Clothing Review Hub (AI)"
              description="See some clothes you like and want to buy it or something similar for yourself? Take a picture and get links to vendors and a summary of reviews to see if it's a worthwhile purchase."
              ghLink="https://github.com/BigDataIA-Spring2023-Team-03/Assignment5"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sa}
              isBlog={false}
              title="Smart Dutch Auction (Smart Contract)"
              description="Solidity contract for a basic Dutch auction. A Dutch auction is a type of auction where the price starts high and decreases over time until someone places a bid."
              ghLink="https://github.com/Raj-Mehta2012/SmartContract_DutchAuction"
              demoLink="https://cold-lake-4291.on.fleek.co/frontend/build/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stockjava}
              isBlog={false}
              title="Stock Box (Java & APIs)"
              description="StockBoxApp provides an invaluable resource for traders who need access to real-time data and analysis in order to make informed decisions about their investments. With a variety of features designed for both experienced investors as well as those new to trading, this apps can help users stay ahead of the curve when it comes to their portfolios."
              ghLink="https://github.com/Raj-Mehta2012/StockBoxApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Xav}
              isBlog={false}
              title="Xavier's Unleashed"
              description="A 3D game Based on unity where the design is of St.Xavier's College, Mumbai and each department is a fun mini-game...Also promoting the social message of cleanliness."
              ghLink="https://github.com/Raj-Mehta2012/Xavier-s-Unleashed"
              demoLink="https://youtu.be/8lZHMXZl7nA"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
