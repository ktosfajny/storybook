import React from "react";
import "./Center.css";

// to jest komponent który z wykorzystaniem decoratora zostanie użyty jako wrapper do wszystkich stories aby były one wycentrowane

const Center = (props) => {
  return <div className="center">{props.children}</div>;
};

export default Center;
