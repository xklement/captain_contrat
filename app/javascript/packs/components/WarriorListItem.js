import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function WarriorListItem(props) {
  const {warrior, selectWarrior} = props

  return (
    <ListGroup.Item as="li" onClick={() => selectWarrior(warrior)}>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{warrior.name}</div>
        text
      </div>
    </ListGroup.Item>
  );
}

export default WarriorListItem;
