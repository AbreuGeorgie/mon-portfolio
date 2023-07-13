import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './MyCard.scss';

function MyCard({cover, title, technologies}) {
  return (
    <Container >
    <Row xs={1} md={2} className='g-4'>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col className="cardBox" key={idx}>
          <Card className=" card">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {technologies}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default MyCard;