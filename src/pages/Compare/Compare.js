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
      }, [match.params.id])

    return (
        <Container fluid>
            <Row>
                <div className="menu">
                    <div className="logo">
                        <img src="../logo-stage.png" alt="Logo" width="150px" />
                    </div>
                    <h4>Comparador de sites </h4>
                    <h2>12 Páginas Encontradas</h2>

                </div>
            </Row>
            <Row>
                <div className="sidenav">
                    <p>Páginas</p>
                    <a href="#inicial">Inicial</a>
                    <a href="#hospedagem">Hospedagem</a>
                    <a href="#convert">Convert</a>
                    <a href="#fale com consultor">Fale com consultor</a>
                    <a href="#criation">Criação de blog</a>
                    <a href="#fale com consultor">Planos e preços</a>
                    <a href="#fale com consultor">Clientes e resultados</a>
                </div>
                  <SiteImages key={sites._id} sites={sites}/>
            </Row>
        </Container>
    );
};