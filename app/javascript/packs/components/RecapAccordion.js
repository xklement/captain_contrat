import React from "react";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function RecapAccordion(props) {
  const { winner, rounds } = props.recap;
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Winner: {winner} !!</Accordion.Header>
        <Accordion.Body>
          {/* <ListGroup as="ol">
            {rounds.map((round, idx) => {
              const roundElems = Object.keys(round)

              return (
              <ListGroup.Item as="li">
                {`round ${idx}`}
                <div className="ms-2 me-auto">
                  <div>

                  </div>
                </div>
              </ListGroup.Item>
            )})}
          </ListGroup> */}
          <ListGroup>
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
