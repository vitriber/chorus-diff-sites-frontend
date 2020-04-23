import React, {useState} from 'react';

import './SiteImages.css';
import {Row, Col, Button, Modal } from 'react-bootstrap';

export function SiteImages({sites}){
    const [show, setShow] = useState(false);
    
    const {Screnshots} = sites;

    return(
        <div className="site-images">
            {Screnshots && Screnshots.map(screenshot => (
                <div> 
                    <Row>
                        <Col sm="10">               
                            <div className="name-page">
                                <h4> {screenshot.pathName} </h4>
                            </div>
                        </Col>
                        <Col sm="2">
                            <Button variant="primary" onClick={() => setShow(true)} className="button-modal">
                                Visualizar
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <div className="url-screenshoot">
                            <a href={`${screenshot.sourceUrl}`}>
                                <h3>{screenshot.sourceUrl}</h3>
                            </a>
                            <img src={screenshot.sourceImage} alt="Logo"/>
                        </div>
                    </Col>
                    <Col>
                    <div className="url-screenshoot">
                        <a href={`${screenshot.targetUrl}`}>
                            <h3>{screenshot.targetUrl}</h3>
                        </a>
                        <img src={screenshot.targetImage} alt="Logo" />
                    </div>
                    </Col>
                    </Row>
                    <Modal
                        show={show}
                        size="lg"
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h4> {screenshot.pathName} </h4>
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Row>
                            <Col> 
                                <img src={screenshot.sourceImage} width="300px" alt="Logo"/>  
                            </Col>
                            <Col>
                                <img src={screenshot.targetImage} width="300px" alt="Logo" />
                            </Col>
                        </Row>
                        </Modal.Body>
                    </Modal>
                </div>
            ))}  
        </div>
    );
}