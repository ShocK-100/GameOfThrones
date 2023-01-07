import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import MoreButton from "../MoreButton/MoreButton";

const CharacterHandler = () => {
  const [characterData, setCharacterData] = useState({});
  const [lastCardId, setLastCardId] = useState(4);
  const dataLength = Object.keys(characterData)?.length;
  const api = "https://thronesapi.com/api/v2/Characters";
  let cardsToDisplay = Object.keys(characterData)
    .slice(0, lastCardId)
    .reduce((result, key) => {
      result[key] = characterData[key];
      return result;
    }, {});

  const fetchData = async () => {
    const response = await axios.get(`${api}`);
    const data = response.data;
    setCharacterData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="characters-container">
      <header data-testid="CharacterHandler-header">Game Of Thrones</header>
      {dataLength === 0 && (
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

      {dataLength > 0 && (
        <MoreButton
          lastCardId={lastCardId}
          CharacterDataLength={dataLength}
          setLastCardId={setLastCardId}
        />
      )}
      {dataLength > 0 && lastCardId >= dataLength && (
        <div className="message">No more characters</div>
      )}
    </div>
  );
};

export default CharacterHandler;
