import React, { Component } from "react";
import data from "../data.json";

const UpIcon = props => {
  return (
    <div
      onClick={PaymentResponse.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(170px)"
      }}
    >
      <img src={data.icons.up} />
    </div>
  );
};
export default UpIcon;
