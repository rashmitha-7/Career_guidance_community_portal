import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Mathematics = () => (
  <Container className="mt-5 d-flex justify-content-center">
    <Card style={{ width: '50rem' }} className="shadow-lg p-4">
      <Card.Body>
        <Card.Title className="text-center fw-bold text-warning">Mathematics Careers</Card.Title>
        <Card.Text className="text-muted">
          Mathematics is the foundation of many fields, including finance, engineering, and data science.
        </Card.Text>
        <h4 className="mt-4">Popular Careers in Mathematics:</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>📊 Data Scientist</ListGroup.Item>
          <ListGroup.Item>💹 Actuary</ListGroup.Item>
          <ListGroup.Item>📈 Statistician</ListGroup.Item>
          <ListGroup.Item>🧮 Mathematician</ListGroup.Item>
          <ListGroup.Item>💻 Cryptographer</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </Container>
);

export default Mathematics;
