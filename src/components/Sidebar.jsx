import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar.png";
import "./Sidebar.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Sidebar() {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={avatar} roundedCircle alt="avatar"/>
        </Col>
      </Row>
      <Row className="navigation">
        <ul>
          <li>
            <NavLink to="/" className="btn-nav">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="btn-nav">A propos</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="btn-nav">Compétences</NavLink>
          </li>
          <li>
            <NavLink to="projects" className="btn-nav">Réalisations</NavLink>
          </li>
          <li>
            <NavLink to="contact" className="btn-nav">Contact</NavLink>
          </li>
        </ul>
      </Row>
    </Container>
  );
}
export default Sidebar;
