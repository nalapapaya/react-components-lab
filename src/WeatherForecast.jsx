import React from "react";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div>
      <div className="weather">
        <h2>{props.day}</h2>
        <img src={props.img} alt={props.imgAlt} />
        <p>
          <span>Conditions: </span>
          {props.conditions}
        </p>
        <p>
          <span>Time: </span>
          {props.time}
        </p>
      </div>
    </div>
  );
};

export default WeatherForecast;
