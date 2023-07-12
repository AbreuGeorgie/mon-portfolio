import Sidebar from "./Sidebar";
import "./Layout.scss";
import "../custom.scss";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout() {
  useEffect(() => {
    document.title = "Portfolio de Georgie Abreu";
  }, []);
  return (
    <Container>
      <Row>
        <Col className="col-4 sidebar">
          <Sidebar />
        </Col>
        <Col className="col-8 page">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
