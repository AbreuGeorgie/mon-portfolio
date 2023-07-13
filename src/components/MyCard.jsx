import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './MyCard.scss';

function MyCard({cover, title, technologies}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container>
      <Card
        className={`flip-card ${isHovered ? 'hovered' : ''} ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
              <Card.Img src={cover}/>
          </div>
          <div className="flip-card-back">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{technologies}</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default MyCard;