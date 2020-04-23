import React, {useEffect, useState} from 'react';
import api from '../../services/api';


import { Container, Row, Col } from 'react-bootstrap';

import './Compare.css';

import {SiteImages} from '../../components/SiteImages';
import {Pagespeed} from '../../components/Pagespeed';


export const Compare = ({ match }) => {

    const [sites, setSites] = useState([]);

    useEffect(() => {
        const loadSites = async () => {
    
          try {
            const response = await api.get('/link', {
                headers: {
                  site: match.params.id,
                }
              })
            setSites(response.data);
        
          } catch (error) {
            alert(`Error: ${error.message}`);
          } finally {
          }
        };
    
        loadSites()
      }, [match.params.id]);


      const {Screnshots, SourceHostname, TargetHostname, SourceHostScore, TargetHostScore } = sites;
      const size = Screnshots && Screnshots.length;
  
    return (
        <Container fluid>
            <Row>
                <div className="menu">
                    <div className="back">
                      <a href="/">
                        <img src="../back.png" alt="back" width="50px" />
                      </a>
                    </div>
                    <div className="logo">
                        <img src="../logo-stage.png" alt="Logo" width="150px" />
                    </div>
                    <h4>COMPARADOR DE SITES</h4>
                    <h2><b>{size}</b> Páginas Encontradas</h2>

                </div>
            </Row>
            <Row>
              <Col sm={3}>
                <div className="sidenav">
                    <p>Páginas</p>
                    {Screnshots && Screnshots.map(screenshot => (
                      <a href="#page">{screenshot.pathName}</a>
                    ))} 
                </div>
              </Col>
              <Col sm={9}>
                  <Pagespeed 
                    SourceHostScore={SourceHostScore} 
                    TargetHostScore={TargetHostScore}
                    SourceHostname= {SourceHostname}
                    TargetHostname= {TargetHostname}/>
                  <SiteImages sites={sites}/>
              </Col>
            </Row>
            <Row>
                <div className="footer">
                </div>
            </Row>
        </Container>
    );
};