import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ExampleCarouselImage from "./ExampleCarouselImage"; // Assuming you have this component ready

const Services = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Our Services</h2>
      <Row className="text-center">
        <Col md={4}>
          <Card className="mb-4">
            <div style={{ height: "200px", overflow: "hidden" }}>
              <ExampleCarouselImage />
            </div>
            <Card.Body>
              <Card.Title>Consulting</Card.Title>
              <Card.Text>
                Expert consulting to help you strategize and grow your business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <div style={{ height: "200px", overflow: "hidden" }}>
              <ExampleCarouselImage />
            </div>
            <Card.Body>
              <Card.Title>Development</Card.Title>
              <Card.Text>
                Custom software development tailored to your business needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <div style={{ height: "200px", overflow: "hidden" }}>
              <ExampleCarouselImage />
            </div>
            <Card.Body>
              <Card.Title>Support</Card.Title>
              <Card.Text>
                Round-the-clock support to ensure your business runs smoothly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center mt-5 mb-4">What Our Clients Say</h3>
      <Row className="text-center">
        <Col md={4}>
          <blockquote className="blockquote">
            <p>
              "The team at Company Name has been phenomenal in helping our
              business grow. Their expertise and support are unparalleled."
            </p>
            <footer className="blockquote-footer">Client Name 1</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote">
            <p>
              "We couldn't be happier with the service we've received. The
              solutions provided were exactly what we needed."
            </p>
            <footer className="blockquote-footer">Client Name 2</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote">
            <p>
              "Professional, efficient, and innovative. We highly recommend
              Company Name."
            </p>
            <footer className="blockquote-footer">Client Name 3</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
