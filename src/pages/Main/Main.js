import React, { useState } from 'react';
import api from '../../services/api';

import './Main.css'

import { Container, Row, Col, Image } from 'react-bootstrap';

import { SiteForm } from '../../components/SiteForm';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Main = (props) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const addSite = async (data) => {
    setLoading(true);
    alert('Dados enviados, aguarde por favor... ');

    try {
      const response = await api.post('/link', data);
      setLinks([...links, response.data]);
      const { _id } = response.data;

      props.history.push(`/compare/${_id}`);
      
    } catch (error) {
      alert(`Ops, algo deu errado: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <Col className="p-3"></Col>
      <Image src="../logo-stage.png" width="150px" className="rounded mx-auto d-block" />
      <Col className="p-3"></Col>
      <Col xs="6" sm="4" className="rounded mx-auto d-block text-center">
        <strong>COMPARADOR DE SITES</strong>
      </Col>
      <Row>
        <SiteForm onSubmit={addSite} />
        {loading && <LoadingSpinner/>}
      </Row>
    </Container>
  );
};