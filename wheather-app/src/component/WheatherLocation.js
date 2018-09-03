import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WheatherLocation = () => (
    <div> 
        <Location city={"Lima Perú"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WheatherLocation;