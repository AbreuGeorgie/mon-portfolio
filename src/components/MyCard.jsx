import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './MyCard.scss';

function MyCard({cover, title, technologies, onClick}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container className='pb-4'>
      <Card
        className={`flip-card ${isHovered ? 'hovered' : ''} bg-secondary`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
              <Card.Img src={cover} className='imageCard'/>
          </div>
          <div className="flip-card-back bg-secondary">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text className="w-100 m-0">Technologies utilisées :{" "}
                <ul>
                  {technologies.map((techno) => (
                    <li key={techno}>{techno}</li>
                  ))}
                </ul></Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default MyCard;