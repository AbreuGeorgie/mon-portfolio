import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function MyModal({ title, description, show, setShow, site, technologies }) {
  return (
    <>
      <MDBModal show={show} onHide={() => setShow(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setShow(false)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Description du projet : {description}</p>
              <p>
                Technologies utilisées :{" "}
                <ul>
                  {technologies.map((techno) => (
                    <li key={techno}>{techno}</li>
                  ))}
                </ul>
              </p>
              <p>Lien vers le projet : {site}</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setShow(false)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}