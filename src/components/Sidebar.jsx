


import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import avatar from "../assets/avatar.png";
import { SidebarButton } from "./SidebarButton";
import MyNavbar from "./MyNavbar"

function Sidebar() {
  return (
    <>
      <Row className="my-lg-5 navigation d-none d-lg-block">
        <Col lg={12} className="text-center">
          <Image
            src={avatar}
            roundedCircle
            alt="avatar"
            width={200}
            height={200}
            className='bounce'
          />
        </Col>
      </Row>

      <Row className="my-lg-5">
        <Col className="lg-12 bar-menu d-flex justify-content-end justify-content-lg-center">
          <MyNavbar />     
          <Navbar collapseOnSelect expand="lg" className="flex-column align-items-end align-items-lg-center">
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
    </>
  );
}

export default Sidebar;
