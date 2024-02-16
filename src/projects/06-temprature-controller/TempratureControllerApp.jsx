import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';

export default function TemperatureControllerApp() {
  const [temperature, setTemperature] = useState(0);

  // Function to determine background color based on temperature
  const getBackgroundColor = () => {
    if (temperature > 40) {
      return '#c0392b'; // Darker red for high temperature
    } else if (temperature > 30) {
      return '#e74c3c';
    } else if (temperature > 20) {
      return '#e74c3c';
    } else if (temperature > 10) {
      return '#e74c3c';
    } else if (temperature > 0) {
      return '#e74c3c';
    } else if (temperature < -5) {
      return '#BBDEFB'; // Lighter blue for low temperature
    } else if (temperature < -10) {
      return '#64B5F6';
    } else if (temperature < -20) {
      return '#2196F3';
    } else if (temperature < -30) {
      return '#1976D2';
    } else if (temperature < -40) {
      return '#1565C0';
    } else if (temperature < -50) {
      return '#0D47A1';
    } else {
      return ''; // Neutral color (colorless)
    }
  };

  const handleClick = (event) => {
    const title = event.target.innerText;

    if (title === "+") {
      setTemperature((previous) => previous + 5);
    } else {
      setTemperature((previous) => previous - 5);
    }
  };

  return (
    <div className='container'>
      <div className="">
        <Title text="Temperature Controller" />
        <div className="card">
          <div className="temperature-window m-auto my-5" style={{ backgroundColor: getBackgroundColor() }}>
            {temperature}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Button text="+" onClick={handleClick} btnClass={'temperature-button app-button'} />
            <Button text="-" onClick={handleClick} btnClass={'temperature-button app-button'} />
          </div>
        </div>
      </div>
    </div>
  );
}
