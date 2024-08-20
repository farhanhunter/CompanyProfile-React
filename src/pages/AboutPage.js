import React from "react";
import Container from "react-bootstrap/Container";

function AboutPage() {
  return (
    <Container className="my-5">
      <h1 className="mb-4">About Us</h1>
      <p>
        Our company has been at the forefront of innovation for over a decade.
        We specialize in delivering high-quality solutions that drive success
        for our clients.
      </p>
      <p>
        Our mission is to empower businesses with the tools and knowledge they
        need to thrive in today’s competitive environment. We believe in
        building long-term relationships with our clients by offering tailored
        services that meet their unique needs.
      </p>
      <h2 className="mt-5 mb-3">Our Values</h2>
      <ul>
        <li className="mb-2">
          <strong>Integrity:</strong> We uphold the highest standards of
          integrity in all our actions.
        </li>
        <li className="mb-2">
          <strong>Innovation:</strong> We constantly seek new and better ways to
          serve our clients.
        </li>
        <li className="mb-2">
          <strong>Customer Commitment:</strong> We develop relationships that
          make a positive difference in our customers' lives.
        </li>
        <li className="mb-2">
          <strong>Quality:</strong> We provide outstanding products and
          unsurpassed service that deliver premium value to our customers.
        </li>
      </ul>
    </Container>
  );
}

export default AboutPage;
