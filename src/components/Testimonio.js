import React from "react";
import '../stylesheets/Testiminio.css';

class Testimonio extends React.Component {
  render() {
    return (
      <div className="testimonio-container">
        <img
          className="image-testimonio"
          src={require(`../img/testimonio-${this.props.image}.jpg`)}
          alt={`${this.props.alt} photo`} />
        <div className="testimonio-text-container">
          <p className="testimonio-name">
            <strong>{this.props.name}</strong> in <strong>{this.props.country}</strong>
          </p>
          <p className="testimonio-job">
            {this.props.job} at <strong>{this.props.company}</strong>
          </p>
          <p className="testimonio-text">"{this.props.testimonio}<b>{this.props.freeCodeCamp}</b>{this.props.testimonio2}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;