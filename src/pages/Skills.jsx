import Badge from "react-bootstrap/Badge";
import html from "../assets/logos/html.png";
import js from "../assets/logos/js.png";
import reactjs from "../assets/logos/reactjs.png";
import nodejs from "../assets/logos/nodejs.png";
import mongodb from "../assets/logos/mongodb.png";
import trello from "../assets/logos/trello.png";
import figma from "../assets/logos/figma.png";
import github2 from "../assets/logos/github2.png";
import bootstrap from "../assets/logos/bootstrap.png";
import sass from "../assets/logos/sass.png";
import css from "../assets/logos/css.png";

function Skills() {
  return (
    <div>
      <header>
        <h1>Mes compétences</h1>
      </header>
      <main>
        <div className="d-flex flex-wrap justify-content-evenly w-100">
          <div className="d-flex flex-column align-items-center m-lg-3  img-sm-size img-md-size img-lg-size img-xl-size">
            <img src={html} width={100} height={100} alt="html" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                HTML
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={css} width={100} height={100} alt="css" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                CSS
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={js} width={110} height={100} alt="js" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                JS
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={reactjs} width={100} height={100} alt="reactjs" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                REACTJS
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={nodejs} width={100} height={100} alt="node.js" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                NODE.JS
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={mongodb} width={100} height={100} alt="mongodb" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                MONGODB
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={trello} width={100} height={100} alt="trello" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                TRELLO
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={figma} width={120} height={100} alt="figma" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                FIGMA
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={github2} width={100} height={100} alt="github" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                GITHUB
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={bootstrap} width={100} height={100} alt="bootstrap" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                BOOTSTRAP
              </Badge>
            </figcaption>
          </div>
          <div className="d-flex flex-column align-items-center m-lg-3">
            <img src={sass} width={120} height={100} alt="sass" />
            <figcaption className="figure-caption">
              <Badge pill bg="secondary">
                SASS
              </Badge>
            </figcaption>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Skills;
