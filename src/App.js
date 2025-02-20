import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Importando o gráfico de barras
import { Chart as ChartJS } from 'chart.js/auto'; // Importando o Chart.js
import './App.css';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  // Funções para converter
  const convertCelsius = (value) => {
    const fahrenheitValue = (value * 9/5) + 32;
    const kelvinValue = value + 273.15;
    setFahrenheit(fahrenheitValue);
    setKelvin(kelvinValue);
  };

  const convertFahrenheit = (value) => {
    const celsiusValue = (value - 32) * 5/9;
    const kelvinValue = celsiusValue + 273.15;
    setCelsius(celsiusValue);
    setKelvin(kelvinValue);
  };

  const convertKelvin = (value) => {
    const celsiusValue = value - 273.15;
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  };

  // Funções de manipulação de inputs
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value && !isNaN(value)) {
      convertCelsius(parseFloat(value));
    } else {
      setFahrenheit('');
      setKelvin('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value && !isNaN(value)) {
      convertFahrenheit(parseFloat(value));
    } else {
      setCelsius('');
      setKelvin('');
    }
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    if (value && !isNaN(value)) {
      convertKelvin(parseFloat(value));
    } else {
      setCelsius('');
      setFahrenheit('');
    }
  };

  // Dados para o gráfico de barras comparativo
  const data = {
    labels: ['Temperaturas'], // Um único label, pois estamos comparando as escalas
    datasets: [
      {
        label: 'Celsius',
        data: [celsius],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
        label: 'Fahrenheit',
        data: [fahrenheit],
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        label: 'Kelvin',
        data: [kelvin],
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Conversor de Temperatura</h1>

        <div className="input-group">
          <label>Celsius:</label>
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Digite em Celsius"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label>Fahrenheit:</label>
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Digite em Fahrenheit"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label>Kelvin:</label>
          <input
            type="text"
            value={kelvin}
            onChange={handleKelvinChange}
            placeholder="Digite em Kelvin"
            className="input-field"
          />
        </div>

        {/* Gráfico de Barras */}
        {(celsius || fahrenheit || kelvin) && (
          <div className="chart-container">
            <Bar data={data} />
          </div>
        )}
      </div>

      {/* Rodapé */}
      <footer className="footer">
        Feito por <strong>Mateus S.</strong>
      </footer>
    </div>
  );
}

export default TemperatureConverter;
