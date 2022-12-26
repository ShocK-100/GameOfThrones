import React from "react";
import { Tooltip } from "@mui/material";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import "../styles/Card.css";

export default function Card({
  family,
  firstName,
  fullName,
  id,
  image,
  imageUrl,
  lastName,
  title,
}) {
  return (
    <div className="container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="under-image-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "70%",
            textAlign: "center",
          }}
        >
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
          <InfoTwoToneIcon fontSize="small" color="action" />
        </Tooltip>
      </div>
    </div>
  );
}
