import Button from 'react-bootstrap/Button';
import "../custom.scss";
import "./Home.scss";
import github from "../assets/logos/github.png";
import linkedin from "../assets/logos/linkedin.png";
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/esm/Col';
import avatar from "../assets/avatar.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <header>
        <Row>
          <Col>
        <h1>Georgie Abreu</h1>
        <h2>Développeuse Frontend</h2>
        </Col>
        </Row>
      </header>

      <main>
      <Col className="text-center d-lg-none">
          <Image
            src={avatar}
            roundedCircle
            alt="avatar"
            width={200}
            height={200}
            className='bounce'
          />
        </Col>
        <div className='main-home'>
        <Button size="lg">Mon CV</Button>
        <div className="socialMedia">
          <Link to="https://www.linkedin.com/in/georgie-abreu-b4592225a/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedin} alt="linkedin" width={32} height={32} roundedCircle/>
          </Link>
          <Link to="https://github.com/AbreuGeorgie" target="_blank" rel="noopener noreferrer">
          <Image src={github} alt="github" width={32} height={32} roundedCircle/>
          </Link>
        </div>
        </div>
      </main>
    </Container>
  );
}
export default Home;
