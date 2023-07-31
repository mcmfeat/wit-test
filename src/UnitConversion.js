import React from "react";
import "./WeatherInfo.css";

export default function UnitConversion(props) {
  function changeUnit(event) {
    event.preventDefault();

    if (props.unit === "metric") {
      props.setUnit("imperial");
    } else {
      props.setUnit("metric");
    }
  }

  return (
    <div className="UnitConversion">
      <span className="temperature">{Math.round(props.temperature)}</span>
      {props.unit === "metric" ? (
        <>
          <span className="scaleCelsius temperature-unit"> ºC</span>
          <a
            href="/"
            onClick={changeUnit}
            className="scaleFarenheit temperature-unit"
          >
            {" "}
            ºF
          </a>
        </>
      ) : (
        <>
          <a
            href="/"
            onClick={changeUnit}
            className="scaleFarenheit temperature-unit"
          >
            {" "}
            ºC
          </a>
          <span className="scaleCelsius temperature-unit"> ºF</span>
        </>
      )}
    </div>
  );
}
