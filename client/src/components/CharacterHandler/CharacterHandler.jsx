import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

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
    // console.log(data);
    setCharacterData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="characters-container">
      <header data-testid="CharacterHandler-header">Game Of Thrones</header>
      {Object.keys(characterData)?.length === 0 && (
        <div className="message">Fetching characters...</div>
      )}
      <div className="character-grid">
        {Object.keys(cardsToDisplay).map((cardKey) => {
          const card = characterData[cardKey];
          return (
            <Card
              key={card.id}
              family={card.family}
              fullName={card.fullName}
              imageUrl={card.imageUrl}
              title={card.title}
            />
          );
        })}
      </div>

      {Object.keys(characterData)?.length > 0 && (
        <button
          className={
            lastCardId < Object.keys(characterData)?.length
              ? "more-button"
              : "disable-more-button"
          }
          disabled={lastCardId >= Object.keys(characterData)?.length}
          onClick={(e) => {
            if (lastCardId < Object.keys(characterData)?.length) {
              setLastCardId((currentLastId) => currentLastId + 4);
            }
          }}
        >
          More
        </button>
      )}
      {Object.keys(characterData)?.length > 0 &&
        lastCardId >= Object.keys(characterData)?.length && (
          <div className="message">No more characters</div>
        )}
    </div>
  );
};

export default CharacterHandler;
