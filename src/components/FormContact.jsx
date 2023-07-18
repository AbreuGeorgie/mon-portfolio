
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormContact() {
  return (
<Form action="mailto:abreu.georgie@gmail.com" method="post" enctype="text/plain">
             <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Sujet</Form.Label>
        <Form.Control type="text" placeholder="Sujet" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMessage">
          <Form.Label>Votre message</Form.Label>
          <Form.Control type="text" placeholder="Votre message" style={{ height: '100px' }}/>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form> 
  );
}
export default FormContact;