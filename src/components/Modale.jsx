import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyModal({
  title,
  description,
  context,
  show,
  setShow,
  site,
  technologies,
  date,
  type, 
  pictures
}) {
  console.log(pictures)
  return (
    <>
      <MDBModal show={show} onHide={() => setShow(false)} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent className="rounded text-center">
            <MDBModalHeader className="align-items-start">
              <MDBModalTitle tag="h1">
                {title}
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setShow(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h2 className="text-secondary">Description du projet :</h2>
              <p className="m-0 mb-1 txt-justify">{context}</p>
              <h2 className="text-secondary">Date du projet :</h2>
              <p className="m-0 mb-1">{date}</p>
              <h3 className="font-italic font-weight-normal">{type}</h3>
              <h2 className="text-secondary">Technologies utilisées :</h2>
              <ul>
                {technologies.map((techno, i) => (
                  <li key={i}>
                    {" "}
                    <Badge pill bg="secondary">
                      {techno}
                    </Badge>
                  </li>
                ))}
              </ul>
              <Link to={site} target="_blank" rel="noopener noreferrer">
                <h2 >Lien vers le projet</h2>
              </Link>
              <>
              {pictures ? pictures.map((picture, i) => (
                <img key={i} src={picture} alt="images du projet"/>
              )) : <></>}
              </>
              
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
