import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Science = () => (
  <Container className="mt-5 d-flex justify-content-center">
    <Card style={{ width: '50rem' }} className="shadow-lg p-4">
      <Card.Body>
        <Card.Title className="text-center fw-bold text-success">Science Careers</Card.Title>
        <Card.Text className="text-muted">
          Science careers focus on research, discovery, and advancements in various disciplines.
        </Card.Text>
        <h4 className="mt-4">Popular Careers in Science:</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>🔬 Biologist</ListGroup.Item>
          <ListGroup.Item>🧪 Chemist</ListGroup.Item>
          <ListGroup.Item>🌍 Environmental Scientist</ListGroup.Item>
          <ListGroup.Item>🧬 Geneticist</ListGroup.Item>
          <ListGroup.Item>🚀 Astrophysicist</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </Container>
);

export default Science;
