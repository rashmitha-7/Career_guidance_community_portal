import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Medical = () => (
  <Container className="mt-5 d-flex justify-content-center">
    <Card style={{ width: '50rem' }} className="shadow-lg p-4">
      <Card.Body>
        <Card.Title className="text-center fw-bold text-danger">Medical Careers</Card.Title>
        <Card.Text className="text-muted">
          The medical field offers a variety of careers focused on healthcare, research, and patient well-being.
        </Card.Text>
        <h4 className="mt-4">Popular Careers in Medical:</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>🩺 Doctor</ListGroup.Item>
          <ListGroup.Item>💉 Nurse</ListGroup.Item>
          <ListGroup.Item>🔬 Medical Researcher</ListGroup.Item>
          <ListGroup.Item>🦷 Dentist</ListGroup.Item>
          <ListGroup.Item>🧬 Geneticist</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </Container>
);

export default Medical;
