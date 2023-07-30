
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailToLink = `mailto:abreu.georgie@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nPrénom: ${formData.firstName}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailToLink;
  };

  return (
    <Form className="form-contact" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Sujet</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sujet"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMessage">
          <Form.Label>Votre message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Votre message"
            style={{ height: '100px' }}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default FormContact;