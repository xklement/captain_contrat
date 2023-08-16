import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import WarriorService from "../services/Warrior";
import WeaponService from "../services/Weapon";

import CustomCard from "../components/CustomCard";
import CustomModal from "../components/CostumModal";

const Warriors = () => {
  const navigate = useNavigate();
  const [warriors, setWarriors] = useState([]);
  const [selectedWarrior, setSelectedWarrior] = useState(0);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetchWarriors();
    fectchWeapons();
  }, [createModalShow]);

  useEffect(() => {
    fetchWarriors();
  }, [editModalShow]);

  const fectchWeapons = async () => {
    try {
      const response = await WeaponService.getAllWeapons();
      setWeapons(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const fetchWarriors = async () => {
    try {
      const response = await WarriorService.getAllWarriors();
      setWarriors(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const createWarrior = async (data) => {
    try {
      await WarriorService.createWarrior(data);
      setCreateModalShow(false);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const editWarrior = async (id, data) => {
    try {
      const response = await WarriorService.editWarrior(id, data);
      setEditModalShow(false);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const deleteWarrior = async (id) => {
    try {
      const response = await WarriorService.deleteWarrior(id);
      setEditModalShow(false);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const handleEditWarriorModal = (id) => {
    setSelectedWarrior(id);
    setEditModalShow(true);
  };

  const handleCloseEditModal = () => {
    setEditModalShow(false);
    setSelectedWarrior(0);
  };

  return (
    <Container>
      <h1>Warriors List</h1>
      <Button
        color="primary"
        style={{ marginBottom: "2em" }}
        onClick={() => setCreateModalShow(true)}
      >
        Add
      </Button>
      <Row className="card-container">
        {warriors.map((warrior) => (
          <div
            className="cards"
            key={warrior.id}
            onClick={() => handleEditWarriorModal(warrior.id)}
          >
            <CustomCard warrior={warrior} />
          </div>
        ))}
      </Row>
      <CustomModal
        show={createModalShow}
        onHide={() => setCreateModalShow(false)}
        handleSumbit={createWarrior}
        text={"Create"}
        weapons={weapons}
      />
      <CustomModal
        show={editModalShow}
        handleSumbit={editWarrior}
        text={"Edit"}
        onHide={() => handleCloseEditModal()}
        delete={() => deleteWarrior(selectedWarrior)}
        currrentWarrior={selectedWarrior}
        weapons={weapons}
      />
    </Container>
  );
};

export default Warriors;
