import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactPage = () => {
  return (
    <Container>
      {/* Wrap Pertama */}
      <Row className="text-center my-5">
        <Col>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Whether you have a question, need
            support, or want to discuss how we can help your business, feel free
            to reach out.
          </p>
        </Col>
      </Row>

      {/* Wrap Kedua */}
      <Row className="d-flex justify-content-between">
        {/* Konten Kiri */}
        <Col md={5}>
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> info@company.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 1234 Street Name, City, State, 56789
          </p>
        </Col>

        {/* Konten Kanan */}
        <Col md={6}>
          <h2>Send Us a Message</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
