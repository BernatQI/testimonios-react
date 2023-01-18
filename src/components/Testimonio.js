import React from "react";
import '../stylesheets/Testiminio.css';

function Testimonio(props) {

  return (
    <div className="testimonio-container">
      <img
        className="image-testimonio"
        src={require(`../img/testimonio-${props.image}.jpg`)}
        alt={props.alt} />
      <div className="testimonio-text-container">
        <p className="testimonio-name">
          <strong>{props.name}</strong> in <strong>{props.country}</strong>
        </p>
        <p className="testimonio-job">
          {props.job} at <strong>{props.company}</strong>
        </p>
        <p className="testimonio-text">"{props.testimonio}<b>{props.freeCodeCamp}</b>{props.testimonio2}"</p>
      </div>
    </div>
  );
}

export default Testimonio;