import React from "react";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function RecapAccordion(props) {
  const { winner, rounds } = props.recap;
  return (
    <Accordion style={{ position: "absolute" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Winner: {winner} !!</Accordion.Header>
        <Accordion.Body>
          <ListGroup className="recap-list">
            {rounds.map((round, idx) => {
              const roundNumber = idx + 1;

              const warriorInfo = Object.entries(round).map(
                ([warriorName, warriorData]) => (
                  <div
                    key={warriorName}
                    className="d-flex justify-content-between"
                  >
                    <span>{warriorName}</span>
                    <span>
                      hp: {warriorData.hp} atk: {warriorData.attack}
                    </span>
                  </div>
                )
              );

              return (
                <ListGroup.Item key={idx}>
                  <div className="mb-2">
                    <strong>Round {roundNumber}</strong>
                  </div>
                  {warriorInfo}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RecapAccordion;
