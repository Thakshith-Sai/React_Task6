import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import stocks from './images/stocks.jpg';
import FileManage from './images/FileManage.gif';
import blind from './images/blind.jpeg';
import Rover from './images/Rover.jpg';

function Projects() {
  return (
    <Container className="mt-5 pb-5 d-flex justify-content-center">
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={stocks} height={200} />
            <Card.Body>
              <Card.Title>Stock Market Prediction</Card.Title>
              <Card.Text>
                Machine Learning and Deep Learning algorithms were used for stock market prediction through
                the graphs given by a large set of input data and stock values. Here I used 'LSTM' and 'RNN' models.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Artificial Intelligence & Machine Learning</small>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={FileManage} height={250} />
            <Card.Body>
              <Card.Title>File Manager</Card.Title>
              <Card.Text>
                This project is regarding managing our files of any type on the server.
                This aims to store, delete, update the uploaded files on to the server.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Web Development</small>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={blind} height={225} />
            <Card.Body>
              <Card.Title>Guide For Blind</Card.Title>
              <Card.Text>
                This Raspberry Pi-based project helps to read and detect the people in front of the blind through the portable device having sensors that guide the blind.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Raspberry Pi</small>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Rover} height={250} />
            <Card.Body>
              <Card.Title>Home Safe Guard</Card.Title>
              <Card.Text>
                This Raspberry Pi-based project helps to find the theft, gas leakage,
                fire breakout, and also used for night surveillance.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Raspberry Pi</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
