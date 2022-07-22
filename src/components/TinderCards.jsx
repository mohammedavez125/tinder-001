import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";

import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction) => {
    console.log("You swiped: " + direction);
  };

  const outOfFrame = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="TinderCards">
      <div className="TinderCards__cardContainer">
        {people.map((person) => (
          //NPM PACKAGE LINK https://www.npmjs.com/package/react-tinder-card

          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
