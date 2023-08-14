import React, { useEffect, useState } from "react";
import WarriorService from "../services/Warrior";

const Warriors = () => {
  const [warriors, setWarriors] = useState([]);

  useEffect(() => {
    fetchWarriors();
  }, []);

  const fetchWarriors = async () => {
    try {
      const response = await WarriorService.getAllWarriors();
      console.log(response)
      setWarriors(response.data);
    } catch (error) {
      console.error("Error fetching warriors:", error);
    }
  };

  return (
    <div>
      <h1>Warriors List</h1>
      <ul>
        {warriors.map((warrior) => (
          <li key={warrior.id}>{warrior.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Warriors;
