import Badge from "react-bootstrap/Badge";
import html from "../assets/html.png";
import js from "../assets/js.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import trello from "../assets/trello.png";
import figma from "../assets/figma.png";
import github2 from "../assets/github2.png";
import "./Skills.scss";

function Skills() {
  return (
    <div>
      <header>
        <h1>Mes compétences</h1>
      </header>
      <main>
        <div className="d-flex flex-wrap justify-content-evenly w-100">
          <div classname="skills">
            <img src={html} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                HTML
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={js} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                JS
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={reactjs} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                REACTJS
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={nodejs} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                NODE.JS
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={mongodb} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                MONGODB
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={trello} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                TRELLO
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={figma} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                FIGMA
              </Badge>
            </figcaption>
          </div>
          <div classname="skills">
            <img src={github2} width={50} height={50} alt="a" />
            <figcaption class="figure-caption">
              <Badge pill bg="secondary">
                GITHUB
              </Badge>
            </figcaption>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Skills;
