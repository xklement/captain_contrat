import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from 'react-bootstrap/Badge';
import HistoricService from "../services/Historic";

const Historics = () => {
  const [historics, setHistorics] = useState([]);

  useEffect(() => {
    fectchHistorics();
  }, []);

  const fectchHistorics = async () => {
    try {
      const response = await HistoricService.getHitorics();
      setHistorics(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  return (
    <Container style={{ height: "fit-content" }}>
      <h1>Historics</h1>
      <ListGroup style={{ width: "100%" }}>
        {historics.map((historic) => (
          <ListGroup.Item key={historic.id}>
            <h4>
              fight <strong>{historic.id}</strong>
            </h4>
            <div className="warriors-ctn">
              <div>{`Warrior 1: ${historic.warrior1?.name}`}</div>
              <div>{`Warrior 2: ${historic.warrior2?.name}`}</div>
            </div>
            <div className="winner">
              Winner: <Badge bg="success">{historic.winner?.name}</Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Historics;
