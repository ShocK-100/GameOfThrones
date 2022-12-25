import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const CharacterHandler = () => {
  const [characterData, setCharacterData] = useState({});
  const [lastCardId, setLastCardId] = useState(4);
  let cardsToDisplay = Object.keys(characterData)
    .slice(0, lastCardId)
    .reduce((result, key) => {
      result[key] = characterData[key];
      return result;
    }, {});

  const fetchData = async () => {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters"
    );
    const data = await response.data;
    console.log(data);
    setCharacterData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        Game Of Thrones
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        {Object.keys(cardsToDisplay).map((cardKey) => {
          const card = characterData[cardKey];
          return (
            <Card
              key={card.id}
              family={card.family}
              firstName={card.firstName}
              fullName={card.fullName}
              id={card.id}
              image={card.image}
              imageUrl={card.imageUrl}
              lastName={card.lastName}
              title={card.title}
            />
          );
        })}
      </div>

      <button
        style={{ width: "80px", marginTop: "2rem" }}
        onClick={(e) => {
          if (lastCardId < Object.keys(characterData)?.length) {
            setLastCardId((currentLastId) => currentLastId + 4);
            console.log(lastCardId);
          }
        }}
      >
        More
      </button>
    </div>
  );
};

export default CharacterHandler;
