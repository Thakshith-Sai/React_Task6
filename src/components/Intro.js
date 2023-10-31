import React from "react";
import "./style.css";
import dp from "./images/dp.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Intro() {
  return (
    <div className="intro-container">
      <img src={dp} alt="Thakshith" className="profile-photo " />
      <h1 className="animated-name">Hello!!. I'm Thakshith Sai</h1>
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <div>
              <p class="intro">
                "I'm a passionate software developer with a love for crafting
                elegant and efficient solutions to complex problems. With a
                strong foundation in web and application development, I bring
                creativity and technical expertise to every project. I'm
                dedicated to delivering high-quality software that not only
                meets but exceeds client expectations."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
