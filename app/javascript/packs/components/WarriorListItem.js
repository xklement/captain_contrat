import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";

function WarriorListItem(props) {
  const { warrior, selectWarrior } = props;

  return (
    <ListGroup.Item
      action
      as="li"
      style={{ height: "10em" }}
      onClick={() => selectWarrior(warrior)}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{warrior.name}</div>
        <Figure>
          <Figure.Image
            width={100}
            height={100}
            src={
              warrior.image_url
                ? warrior.image_url
                : "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            }
          />
        </Figure>
      </div>
    </ListGroup.Item>
  );
}

export default WarriorListItem;
