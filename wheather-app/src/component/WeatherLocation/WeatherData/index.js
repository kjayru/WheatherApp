import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { RAIN } from './../../../constant/weather';
import './style.css';

const WeatherData = () => (
    <div className="weatherDataCon">
        <WeatherTemperature temperature={26} weatherState={RAIN} />
        <WeatherExtraInfo humidity={90} wind={'10 m/s'} />    
    </div>
     
);

export default WeatherData;