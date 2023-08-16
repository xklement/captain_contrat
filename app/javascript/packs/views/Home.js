import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CombatService from "../services/Combat";
import WarriorService from "../services/Warrior";
import WarriorListModal from "../components/WarriorListModal";
import CustomCard from "../components/CustomCard";
import RecapAccordion from "../components/RecapAccordion";

const Home = () => {
  const [chooseModal, setChooseModal] = useState(false);
  const [warriors, setWarriors] = useState([]);
  const [current, setCurrent] = useState(0);
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});
  const [recap, setRecap] = useState({});

  useEffect(() => {
    fetchWarriors();
  }, []);

  const fetchWarriors = async () => {
    try {
      const response = await WarriorService.getAllWarriors();
      setWarriors(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const simulateCombat = async (ids) => {
    try {
      const response = await CombatService.simulateCombat(ids);
      setRecap(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  const handleChooseWarrior = (player) => {
    setChooseModal(true);
    setCurrent(player);
  };

  const selectWarrior = (warrior) => {
    current == 1 ? setPlayerOne(warrior) : setPlayerTwo(warrior);
    setChooseModal(false);
  };

  const fight = () => {
    if (playerOne.id > 0 && playerTwo.id > 0)
      simulateCombat({ warrior1_id: playerOne.id, warrior2_id: playerTwo.id });
    setPlayerOne(0);
    setPlayerTwo(0);
  };

  return (
    <Container>
      <h2>Chose your Warrior for the fight !</h2>
      <Container className="container">
        {recap.winner && <RecapAccordion recap={recap} />}
        <div className="btn-container">
          {!playerOne.id ? (
            <div className="empty-box">
              <Button onClick={() => handleChooseWarrior(1)}>+</Button>
            </div>
          ) : (
            <CustomCard warrior={playerOne} />
          )}
          {!playerTwo.id ? (
            <div className="empty-box">
              <Button onClick={() => handleChooseWarrior(2)}>+</Button>
            </div>
          ) : (
            <CustomCard warrior={playerTwo} />
          )}
        </div>
        <Button onClick={() => fight()}>Fight</Button>
      </Container>
      <WarriorListModal
        show={chooseModal}
        onHide={() => setChooseModal(false)}
        selectWarrior={selectWarrior}
        warriors={warriors}
      />
    </Container>
  );
};

export default Home;
