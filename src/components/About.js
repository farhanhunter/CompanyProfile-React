import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ExampleCarouselImage from "./ExampleCarouselImage"; // assuming you have this component
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>About Our Company</h1>
          <p>
            We are a leading firm with over 10 years of experience in providing
            top-notch solutions to our clients. Our mission is to deliver
            quality and value in everything we do. Learn more about our story
            and values.
          </p>
          <Button variant="secondary" as={Link} to="/about">
            Learn More
          </Button>
        </Col>
        <Col md={6}>
          <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <ExampleCarouselImage />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
