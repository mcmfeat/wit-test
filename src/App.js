import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import StyledButton from "./StyledButton";
import axios from "axios";

import "./App.css";

import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App() {
  const validationSchema = Yup.object().shape({
    city: Yup.string()
      .required("")
      .test("city-validation", "Insert a valid city", (value) =>
        /^[a-zA-Z\s]+$/.test(value)
      ),
  });

  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState([]);
  const [unit, setUnit] = useState("metric");

  function handleWeatherDataResponse({ data }) {
    setWeatherData({
      city: data.name,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
      icon: data.weather[0].icon,
      temperature: data.main.temp,
      coordinates: data.coord,
    });

    getForecastData(data.coord.lat, data.coord.lon);
  }

  function handleForecastResponse({ data }) {
    setForecastData(data.daily);
  }

  function handleError({ response }) {
    const message =
      response.data.message.charAt(0).toUpperCase() +
      response.data.message.slice(1);

    alert(message);
  }

  function getWeatherData(formValues) {
    const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${formValues.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleWeatherDataResponse, handleError);
  }

  function getForecastData(latitude, longitude) {
    let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleForecastResponse, handleError);
  }

  useEffect(() => {
    const defaultCity = { city: "Lisbon" };

    getWeatherData(defaultCity);
  }, []);

  useEffect(() => {
    if (!weatherData) {
      return;
    }

    const city = { city: weatherData.city };

    getWeatherData(city);
  }, [unit]);

  return (
    <div className="App">
      <div className="app-container flex">
        <div className="form1 flex">
          <Formik
            initialValues={{ city: "" }}
            validadeOnMount={true}
            validationSchema={validationSchema}
            onSubmit={(formValues) => getWeatherData(formValues)}
          >
            {(formInfo) => (
              <Form className="form2 flex">
                <div className="input-container">
                  <Field
                    className="input-field"
                    type="text"
                    name="city"
                    placeholder="Search for a city"
                    autoComplete="off"
                  />
                </div>
                <StyledButton formInfo={formInfo} />
              </Form>
            )}
          </Formik>
        </div>
        {weatherData && (
          <>
            <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
            <Forecast forecastData={forecastData} />
          </>
        )}
      </div>
    </div>
  );
}
