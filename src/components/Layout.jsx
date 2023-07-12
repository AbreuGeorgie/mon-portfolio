import Sidebar from "./Sidebar";
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
    <Container className="fluid">
      <Row>
        <Col className="col-4 sidebar bg-primary bg-gradient rounded">
          <Sidebar />
        </Col>
        <Col className="col-8 page bg-warning bg-gradient bg-opacity-50 rounded">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
