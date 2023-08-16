import React from "react";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import WarriorListItem from "./WarriorListItem";

function WarriorListModal(props) {
  const { warriors, selectWarrior } = props;
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ListGroup as="ol">
        {warriors.map((warrior) => (
          <WarriorListItem key={warrior.id} warrior={warrior} selectWarrior={selectWarrior}/>
        ))}
      </ListGroup>
    </Modal>
  );
}

export default WarriorListModal;
