import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Economics = () => (
  <Container className="mt-5 d-flex justify-content-center">
    <Card style={{ width: '50rem' }} className="shadow-lg p-4">
      <Card.Body>
        <Card.Title className="text-center fw-bold text-secondary">Economics Careers</Card.Title>
        <Card.Text className="text-muted">
          Economics careers revolve around financial markets, government policies, and business strategies.
        </Card.Text>
        <h4 className="mt-4">Popular Careers in Economics:</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>📉 Economist</ListGroup.Item>
          <ListGroup.Item>🏦 Financial Analyst</ListGroup.Item>
          <ListGroup.Item>📊 Market Research Analyst</ListGroup.Item>
          <ListGroup.Item>💰 Investment Banker</ListGroup.Item>
          <ListGroup.Item>📈 Policy Analyst</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </Container>
);

export default Economics;
