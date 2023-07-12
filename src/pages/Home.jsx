import Button from 'react-bootstrap/Button';
import "../custom.scss";
import "./Home.scss";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Image from 'react-bootstrap/esm/Image';

function Home() {
  return (
    <div>
      <header>
        <h1>Georgie Abreu</h1>
        <h2>Développeuse Frontend</h2>
      </header>
      <main>
        <div className='main-home'>
        <Button style={{ backgroundColor: '#FEB321', border: 'none', color: 'black' }} size="lg">Mon CV</Button>
        <div className="socialMedia">
          <button><Image src={github} alt="github" width={32} height={32} roundedCircle/></button>
          <button><Image src={linkedin} alt="linkedin" width={32} height={32} roundedCircle/></button>
        </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
