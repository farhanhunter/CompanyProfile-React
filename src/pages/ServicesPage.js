import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExampleCarouselImage from "../components/ExampleCarouselImage";

const ServicePage = () => {
  return (
    <Container>
      <h1 className="text-center my-5">Our Services</h1>
      <Row>
        <div className="mb-4">
          <Col
            className="text-center"
            style={{ padding: "20px 0", maxWidth: "720px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <ExampleCarouselImage text="Consulting" />
            </div>
            <h2>Consulting</h2>
            <p>
              We provide expert consulting services to help your business
              navigate complex challenges and achieve strategic objectives.
            </p>
          </Col>
        </div>
        <div className="mb-4">
          <Col
            className="text-center"
            style={{ padding: "20px 0", maxWidth: "720px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <ExampleCarouselImage text="Development" />
            </div>
            <h2>Development</h2>
            <p>
              Our development services deliver high-quality, scalable solutions
              that align with your business goals and technical requirements.
            </p>
          </Col>
        </div>
        <div className="mb-4">
          <Col
            className="text-center"
            style={{ padding: "20px 0", maxWidth: "720px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <ExampleCarouselImage text="Design" />
            </div>
            <h2>Design</h2>
            <p>
              We create visually stunning designs that communicate your brand
              effectively and engage your target audience.
            </p>
          </Col>
        </div>
        <div className="mb-4">
          <Col
            className="text-center"
            style={{ padding: "20px 0", maxWidth: "720px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <ExampleCarouselImage text="Marketing" />
            </div>
            <h2>Marketing</h2>
            <p>
              Our marketing services help you reach the right audience with the
              right message to drive growth and achieve your objectives.
            </p>
          </Col>
        </div>
        <div className="mb-4">
          <Col
            className="text-center"
            style={{ padding: "20px 0", maxWidth: "720px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <ExampleCarouselImage text="Support" />
            </div>
            <h2>Support</h2>
            <p>
              We provide reliable support services to ensure your systems
              operate smoothly and efficiently, minimizing downtime and
              disruptions.
            </p>
          </Col>
        </div>
        <div className="mb-4">
          <Col
            className="text-center"
            style={{ padding: "20px 0", maxWidth: "720px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <ExampleCarouselImage text="Training" />
            </div>
            <h2>Training</h2>
            <p>
              Our training programs equip your team with the skills and
              knowledge they need to succeed in a fast-paced business
              environment.
            </p>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default ServicePage;
