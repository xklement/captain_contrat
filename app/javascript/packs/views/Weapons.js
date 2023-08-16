import React, { useEffect, useState } from "react";
import WeaponService from "../services/Weapon";
import { Button, Container, Form, ListGroup } from "react-bootstrap";

const Weapons = () => {
  const [formData, setFormData] = useState({ name: "", attack: 0, hp: 0 });
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fectchWeapons();
  }, []);

  const fectchWeapons = async () => {
    try {
      const response = await WeaponService.getAllWeapons();
      setWeapons(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const createWeapons = async () => {
    try {
      const response = await WeaponService.createWeapon({ weapon: formData });
      fectchWeapons();
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const deleteWeapon = async (id) => {
    try {
      await WeaponService.deleteWeapon(id);
      fectchWeapons();
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container style={{ height: "fit-content" }}>
      <div>
        <h2>Create Weapon</h2>
        <Form style={{ display: "flex" }}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Attack</Form.Label>
            <Form.Control
              type="number"
              name="attack"
              placeholder="Attack"
              value={formData.attack}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>HP</Form.Label>
            <Form.Control
              type="number"
              name="hp"
              placeholder="HP"
              value={formData.hp}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={() => createWeapons()}>
          Create
        </Button>
      </div>
      <div>
        <ListGroup style={{ display: "flex", flexDirection: "row" }}>
          {weapons.map((weapon) => (
            <ListGroup.Item key={weapon.id}>
              <h4>
                <strong>{weapon.name}</strong>
              </h4>
              <div className="stat-ctn">
                <div>{`Attack: ${weapon.attack}`}</div>
                <div>{`HP: ${weapon.hp}`}</div>
              </div>
              <Button variant="danger" onClick={() => deleteWeapon(weapon.id)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Weapons;
