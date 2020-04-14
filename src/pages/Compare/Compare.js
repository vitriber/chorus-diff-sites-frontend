import React, {useEffect, useState} from 'react';
import api from '../../services/api';


import { Container, Row } from 'react-bootstrap';

import './Compare.css';

import {SiteImages} from '../../components/SiteImages';


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

      const {Screnshots} = sites;
      console.log(Screnshots);
      const size = Screnshots && Screnshots.length;
      console.log(size);

    return (
        <Container fluid>
            <Row>
                <div className="menu">
                    <div className="logo">
                        <img src="../logo-stage.png" alt="Logo" width="150px" />
                    </div>
                    <h4>COMPARADOR DE SITES</h4>
                    <h2><b>{size}</b> Páginas Encontradas</h2>

                </div>
            </Row>
            <Row>
                <div className="sidenav">
                    <p>Páginas</p>
                    {Screnshots && Screnshots.map(screenshot => (
                      <a href="#page">{screenshot.pathName}</a>
                    ))} 
                </div>
                  <SiteImages key={sites._id} sites={sites}/>
            </Row>
        </Container>
    );
};