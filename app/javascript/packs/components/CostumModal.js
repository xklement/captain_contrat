import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import WarriorService from "../services/Warrior";
import Select from "react-select";

function CustomModal(props) {
  const { currrentWarrior, text, weapons } = props;
  const [validated, setValidated] = useState(false);
  const [warrior, setWarrior] = useState({});
  const [selectedWeapons, setSelectedWeapons] = useState([]);

  useEffect(() => {
    if (currrentWarrior > 0) {
      getWarrior();
    }
  }, [currrentWarrior]);

  const getWarrior = async () => {
    try {
      const response = await WarriorService.getOneWarrior(currrentWarrior);
      setWarrior(response.data[0]);
      const selectedWeaponIds = response.data[0].weapons.map(
        (weapon) => weapon.id
      );
      const selectedWeapons = weapons.filter((weapon) =>
        selectedWeaponIds.includes(weapon.id)
      );

      setSelectedWeapons(
        selectedWeapons.map((weapon) => ({
          value: weapon.id,
          label: weapon.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData();
    const name = form.name.value;
    const attack = form.attack.value;
    const hp = form.hp.value;
    const weapons = selectedWeapons.map((option) => option.value); // Get selected weapon IDs
    const image = form.image.files[0] ? form.image.files[0] : null;

    formData.append("name", name);
    formData.append("attack", attack);
    formData.append("hp", hp);
    formData.append("weapons", weapons);
    formData.append("image", image);

    if (form.checkValidity() === false) event.stopPropagation();
    setValidated(true);
    currrentWarrior
      ? props.handleSumbit(currrentWarrior, formData)
      : props.handleSumbit(formData);
  };

  const handleCloseEditModal = () => {
    props.onHide();
    setWarrior({});
  };

  return (
    <Modal
      show={props.show}
      onHide={handleCloseEditModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {`${text} Warrior`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={warrior?.name}
              type="input"
              name="name"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Attack</Form.Label>
            <Form.Control
              defaultValue={warrior?.attack}
              type="number"
              name="attack"
              min={0}
              required
            />
            <Form.Label>HP</Form.Label>
            <Form.Control
              defaultValue={warrior?.hp}
              type="number"
              name="hp"
              min={0}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Picture</Form.Label>
            <Form.Control rows={3} type="file" name="image" />
          </Form.Group>
        </Modal.Body>
        <Form.Group controlId="my_multiselect_field">
          <Form.Label>Weapons</Form.Label>
          <Select
            options={weapons.map((weapon) => ({
              value: weapon.id,
              label: weapon.name,
            }))}
            value={selectedWeapons}
            onChange={(selectedOptions) => setSelectedWeapons(selectedOptions)}
            isMulti
          />
        </Form.Group>
        <Modal.Footer>
          {props.delete && currrentWarrior > 0 && (
            <Button
              variant="danger"
              onClick={() => props.delete(currrentWarrior)}
            >
              Delete
            </Button>
          )}
          <Button type="submit">{text}</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CustomModal;
