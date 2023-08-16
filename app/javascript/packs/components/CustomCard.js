import React from "react";

import Card from "react-bootstrap/Card";

function CustomCard(props) {
  const { name, attack, hp, image_url } = props.warrior;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="card-image"
        src={
          image_url
            ? image_url
            : "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        }
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>hp: {hp}</Card.Text>
        <Card.Text>attack: {attack}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
