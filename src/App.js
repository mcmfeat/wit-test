import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
      .test("city-validation", "Digite um nome de cidade válido", (value) =>
        /^[a-zA-Z\s]+$/.test(value)
      ),
  });

  function handleSubmit(x) {
    console.log(x);
  }

  function search(formValues) {
    const apiKey = "dd3307b558f459294b4bafe6a4fddf7f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${formValues.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }

  return (
    <div className="App">
      <div className="app-container flex">
        <div className="form1 flex">
          <Formik
            initialValues={{ city: "" }}
            validationSchema={validationSchema}
            onSubmit={(formValues) => search(formValues)}
          >
            {(formInfo) => (
              <Form className="form2 flex">
                <div className="input-container">
                  <Field
                    className="input-field"
                    type="text"
                    name="city"
                    placeholder="Digite o nome da cidade"
                    autoComplete="off"
                  />
                </div>
                <StyledButton props={formInfo} />
              </Form>
            )}
          </Formik>
        </div>
        <WeatherInfo />
        <Forecast />
      </div>
    </div>
  );
}
