import React from "react";
import { assets } from "../../assets/assets";

const Card = ({para,img}) => {
  return (
    <>
      <div className="card">
        <p>{para}</p>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Card;
