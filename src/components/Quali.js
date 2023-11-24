import React from "react";
import "../CSS/Quali.css";
import Card from "./Card";
import ssl from '../Images/sslc.png';
import can from '../Images/canara.png';

function Quali() {
  const QualiP =[
    {
      id: 1,
      k:"Qualification",
      h: "10th",
      p: "Sathya SAi Loka Seva High School",
      I:ssl,
    },
    {
      id: 2,
      h: "2nd PUC",
      p: "Sathya Sai Loka Seva PU College",
      I:ssl,
    },
    {
      id: 3,
      h: "B Tech",
      p: "Canara Engineering College",
      I:can,
    },
  ];
  return (
    <div className="qual">
      
      {QualiP.map((item) => (
        <Card QualiP={item} />
      ))}
    </div>
  );
}

export default Quali;
