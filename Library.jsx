import React from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

const CareerLibrary = () => {
  const categories = [
    { name: 'Engineering', img: 'engineering-img' },
    { name: 'Medical', img: 'medical-img' },
    { name: 'Science', img: 'science-img' },
    { name: 'Mathematics', img: 'maths-img' },
    { name: 'Food and Agriculture', img: 'food-agri-img' },
    { name: 'Sports', img: 'sports-img' },
    { name: 'Government', img: 'govt-img' },
    { name: 'Economics', img: 'economics-img' },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Career Library</h2>
      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search for careers..."
          className="w-50"
        />
      </div>
      <Row>
        {categories.map((category, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Img variant="top" src={category.img} alt={category.name} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CareerLibrary;
