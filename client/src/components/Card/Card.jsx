import React from "react";
import { Tooltip } from "@mui/material";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
// import "../styles/Card.css";

export default function Card({ family, fullName, imageUrl, title }) {
  return (
    <div className="container box-inner">
      <div className="image-container">
        <img data-testid="card-image" src={imageUrl} alt="" />
      </div>
      <div className="under-image-container">
        <div data-testid="card-full-name" className="full-name">
          {fullName}
        </div>

        <Tooltip
          title={
            <>
              <div className="tooltip">
                <div>
                  {fullName}, {title}
                </div>
                <div>House: {family}</div>
              </div>
            </>
          }
          placement="bottom"
        >
          <InfoTwoToneIcon
            data-testid="card-info-button"
            fontSize="small"
            className="info-icon"
          />
        </Tooltip>
      </div>
    </div>
  );
}
