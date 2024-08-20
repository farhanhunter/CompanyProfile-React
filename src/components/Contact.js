import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container className="text-center my-5">
      <h2 className="mb-4">Ready to Get Started?</h2>
      <p className="mb-4">
        Contact us today to discuss how we can help your business achieve its
        goals.
      </p>
      <Button variant="primary" size="lg" as={Link} to="/contact">
        Contact Us
      </Button>
    </Container>
  );
};

export default Contact;
