import React from "react";

const MoreButton = ({ lastCardId, CharacterDataLength, setLastCardId }) => {
  return (
    <button
      className={
        lastCardId < CharacterDataLength ? "more-button" : "disable-more-button"
      }
      disabled={lastCardId >= CharacterDataLength}
      onClick={(e) => {
        if (lastCardId < CharacterDataLength) {
          setLastCardId((currentLastId) => currentLastId + 4);
        }
      }}
    >
      More
    </button>
  );
};

export default MoreButton;
