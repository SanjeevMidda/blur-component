import React from "react";

const Card = ({ text, img }) => {
  let styles = {
    backgroundPosition: "center",
  };

  return (
    <div className="card" style={styles}>
      <h2>{text}</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Card;
