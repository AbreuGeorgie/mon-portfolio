import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import avatar from "../assets/avatar.png";
import { SidebarButton } from "./SidebarButton";

function Sidebar() {
  return (
    <Container>
      <Row className="navigation justify-content-center">
        <Col lg={12} className="text-center">
          <Image
            src={avatar}
            roundedCircle
            alt="avatar"
            width={200}
            height={200}
          />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Navbar expand="lg" className="flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <SidebarButton buttonText="" text="Accueil" />
                <SidebarButton buttonText="about" text="A propos de moi" />
                <SidebarButton buttonText="skills" text="Mes compétences" />
                <SidebarButton buttonText="projects" text="Mes projets réalisés" />
                <SidebarButton buttonText="contact" text="Contactez-moi !" />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
