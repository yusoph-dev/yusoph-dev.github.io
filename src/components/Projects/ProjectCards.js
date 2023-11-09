import React, { useState } from "react";
import { Button, Modal, Card} from "react-bootstrap"; 
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import ImageGallery from "react-image-gallery";


function ProjectCards(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let ghbutton;

  if(props.ghLink !== false){
    ghbutton = <Button variant="primary" href={props.ghLink} target="_blank">
                  <BsGithub /> &nbsp;
               </Button>;
  }


  let demobutton;

  if(props.demoLink !== false){
    demobutton = <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"Demo"}
                 </Button>;
  }


  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {ghbutton}

        {"\n"}
        {"\n"}

        {demobutton}

        <Button variant="primary" onClick={handleShow} style={{ marginLeft:"10px" }}>
            <TfiGallery /> &nbsp;
          Gallery
        </Button>
      </Card.Body>


      <Modal show={show} onHide={handleClose} dialogClassName="gallery-modal">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>Modal content goes here.</p> */}
          <ImageGallery items={props.images} lazyLoad={true}/>
        </Modal.Body>
      </Modal>
    </Card>
  );
}
export default ProjectCards;
