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
    <Container fluid className="mt-lg-5">
      <Row className="vh-75 g-lg-1">
        <Col xs={12} lg={3} className="sidebar bg-primary bg-gradient rounded-4">
          <Sidebar />
        </Col>
        <Col xs={12} lg={8} className="page bg-warning bg-gradient bg-opacity-50 rounded-4 offset-lg-1 pb-5">
          <Outlet />
        </Col>
      </Row>

    </Container>
  );
}

export default Layout;






