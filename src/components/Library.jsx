import React from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Library.css"; // Import CSS file for animations

const Library = () => {
  const categories = [
    { name: "Engineering", img: "/engineer.jpg", path: "/engineering" },
    { name: "Medical", img: "/medical.jpg", path: "/medical" },
    { name: "Science", img: "/science.jpg", path: "/science" },
    { name: "Mathematics", img: "/maths.jpg", path: "/mathematics" },
    { name: "Economics", img: "/economic.jpg", path: "/economics" },
    { name: "Food", img: "/food and agriculture.jpg", path: "/food" },
    { name: "Sports", img: "/sports.jpg", path: "/sports" },
    { name: "Government", img: "/government.jpg", path: "/government" },
  ];

  return (
    <Container className="mt-5 fade-in">
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
            <Card className="text-center card-hover">
              <Link to={category.path} style={{ textDecoration: "none", color: "inherit" }}>
                <Card.Img variant="top" src={category.img} alt={category.name} className="category-img" />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Library;
