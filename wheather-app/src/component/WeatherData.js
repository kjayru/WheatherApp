import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { SNOW } from './../constant/weather';
 
const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={26} weatherState={SNOW} />
        <WeatherExtraInfo humidity={90} wind={'10 ms/s'} />    
    </div>
     
);

export default WeatherData;