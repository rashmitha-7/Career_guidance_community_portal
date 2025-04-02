import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Engineering = () => (
  <Container className="mt-5 d-flex justify-content-center">
    <Card style={{ width: '50rem' }} className="shadow-lg p-4">
      <Card.Body>
        <Card.Title className="text-center fw-bold text-primary">Engineering Careers</Card.Title>
        <Card.Text className="text-muted">
          Engineering offers various fields such as Mechanical, Civil, Electrical, and Software Engineering.
          These careers play a crucial role in innovation, infrastructure, and technological advancements.
        </Card.Text>
        <h4 className="mt-4">Popular Careers in Engineering:</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>⚙️ Software Engineer</ListGroup.Item>
          <ListGroup.Item>🏗️ Mechanical Engineer</ListGroup.Item>
          <ListGroup.Item>🏛️ Civil Engineer</ListGroup.Item>
          <ListGroup.Item>🔌 Electrical Engineer</ListGroup.Item>
          <ListGroup.Item>✈️ Aerospace Engineer</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </Container>
);

export default Engineering;
