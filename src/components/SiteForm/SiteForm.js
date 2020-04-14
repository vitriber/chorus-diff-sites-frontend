import React, {useState} from 'react';

import { Form, Button, Container, Col, Row } from 'react-bootstrap';

import './SiteForm.css'

export function SiteForm({onSubmit}){
    const [SourceHostname, setSourceHostname] = useState('');
    const [TargetHostname, setTargetHostname] = useState('');
  

    async function handleSubmit(e){
      e.preventDefault(); 

      await onSubmit({
          SourceHostname,
          TargetHostname,
        });

        setSourceHostname('');
        setTargetHostname('');
    }

    return(
        <Container>
           <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="6" id="form-rate-sites">
                  <Form.Group controlId="formLinkFirst">
                    <Form.Label>Link 1</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Entre com o primeiro link"
                      value={SourceHostname}
                      onChange={e => setSourceHostname(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId="formNoteFirst">
                    <Form.Label>Nota</Form.Label>
                    <Form.Control type="text" placeholder="Nota" />
                  </Form.Group>

                  <Form.Group controlId="formSpeedFirst">
                    <Form.Label>Indice de Velocidade</Form.Label>
                    <Form.Control type="text" placeholder="Velocidade" />
                  </Form.Group>   
                </Col>
                <Col xs="6" id="form-rate-sites">
                  <Form.Group controlId="formLinkSecond">
                    <Form.Label>Link 2</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Entre com o segundo link"
                      value={TargetHostname}
                      onChange={e => setTargetHostname(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId="formNoteFirst">
                    <Form.Label>Nota</Form.Label>
                    <Form.Control type="text" placeholder="Nota" />
                  </Form.Group>

                  <Form.Group controlId="formSpeedFirst">
                    <Form.Label>Indice de Velocidade</Form.Label>
                    <Form.Control type="text" placeholder="Velocidade" />
                  </Form.Group>   
          </Col>
           </Row>
           <Button id="form-button" variant="primary" type="submit">
              Verificar
          </Button>
           </Form>
        </Container>
       
    );
}