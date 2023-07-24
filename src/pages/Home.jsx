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
          <button><Image src={github} alt="github" width={32} height={32} roundedCircle/></button>
          <button><Image src={linkedin} alt="linkedin" width={32} height={32} roundedCircle/></button>
        </div>
        </div>
      </main>
    </Container>
  );
}
export default Home;
