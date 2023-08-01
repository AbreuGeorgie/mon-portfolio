import React, { useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import "./MyCard.scss";

function MyCard({ cover, title, technologies, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container className="pb-4">
      <Card
        border="primary"
        className={`flip-card ${isHovered ? "hovered" : ""} bg-primary`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <div className="flip-card-inner">
          <div className="card-container flip-card-front">
            <Card.Img src={cover} className="imageCard" />
          </div>
          <div className="card-container flip-card-back bg-secondary">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <ListGroup>
                {technologies.map((techno, i) => (
                  <ListGroup.Item key={i}>{techno}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default MyCard;
