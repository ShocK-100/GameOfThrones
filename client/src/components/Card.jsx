import React from "react";
import { Tooltip } from "@mui/material";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";

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
    <div
      className="container"
      style={{
        border: "1px solid black",
        width: "9rem",
        height: "14rem",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div className="image" style={{ flex: 8, width: "100%" }}>
        <img
          src={imageUrl}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "160px",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="under-image"
        style={{
          flex: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 0.5rem",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "50%",
          }}
        >
          {fullName}
        </div>

        <span style={{ paddingLeft: "1.5rem", paddingTop: "0.4rem" }}>
          <Tooltip
            title={
              <>
                {fullName}, {title}
                <br></br>House: {family}
              </>
            }
            placement="top"
          >
            <InfoTwoToneIcon fontSize="small" color="disabled" />
          </Tooltip>
        </span>
      </div>
    </div>
  );
}
