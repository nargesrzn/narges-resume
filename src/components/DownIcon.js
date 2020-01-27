import React, { Component } from "react";
import data from "../data.json";

const DownIcon = props => {
  return (
    <div
      onClick={PaymentResponse.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(230px)"
      }}
    >
      <img src={data.icons.down} />
    </div>
  );
};
export default DownIcon;
