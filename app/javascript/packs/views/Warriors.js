import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import WarriorService from "../services/Warrior";
import CustomCard from "../components/CustomCard";
import CustomModal from "../components/CostumModal";

const Warriors = () => {
  const navigate = useNavigate();
  const [warriors, setWarriors] = useState([]);
  const [selectedWarrior, setSelectedWarrior] = useState(-1);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  useEffect(() => {
    fetchWarriors();
  }, [createModalShow]);

  useEffect(() => {
    fetchWarriors();
  }, [editModalShow]);

  const fetchWarriors = async () => {
    try {
      const response = await WarriorService.getAllWarriors();
      console.log(response);
      setWarriors(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const createWarrior = async (data) => {
    try {
      const response = await WarriorService.createWarrior(data);
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

  return (
    <Container>
      <h1>Warriors List</h1>
      <Button color="primary" className="px-4" onClick={() => navigate("/")}>
        Go back
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
        <Button color="primary" onClick={() => setCreateModalShow(true)}>
          Add
        </Button>
      </Row>
      <CustomModal
        show={createModalShow}
        handleSumbit={createWarrior}
        text={'Create'}
        onHide={() => setCreateModalShow(false)}
      />
      <CustomModal
        show={editModalShow}
        handleSumbit={editWarrior}
        text={'Edit'}
        onHide={() => setEditModalShow(false)}
        delete={() => deleteWarrior(selectedWarrior)}
        currrentWarrior={selectedWarrior}
      />
    </Container>
  );
};

export default Warriors;
