import React from "react";
// import { Tooltip } from "@mui/material";

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
      style={{
        border: "1px solid black",
        width: "7rem",
        height: "15rem",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        alignContent: "center",
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        {/* <Tooltip title="hi">
          <button>Register</button>
        </Tooltip> */}
      </div>
      <img
        src={imageUrl}
        alt=""
        style={{
          borderRadius: "20%",
          height: "120px",
          width: "120px",
          top: "0",
          //   objectFit: "contain",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <span style={{ marginRight: "1rem" }}>{fullName}</span>
      </div>
    </div>
  );
}
