import React from "react";
import CardContent from "./CardContent";
import Clip from "./Clip";

export default function Card(props) {
  const { content, label } = props.propData;
  return (
    <div
      className="container row align-items-center justify-content-center"
      id="card-screen"
    >
      <div className="card left-aligned border border-dark border-3" id="card">
        <div className="card-header">
          <Clip title={label} />
        </div>
        <div className="card-body">
          <CardContent markdown={content} />
        </div>
      </div>
    </div>
  );
}
