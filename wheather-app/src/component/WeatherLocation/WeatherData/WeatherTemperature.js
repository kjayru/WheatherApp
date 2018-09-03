import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';

import { CLOUD, CLOUDY, SUN , RAIN, SNOW, WINDY} from './../../../constant/weather';


const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return 'cloud';
        break;

        case CLOUDY:
            return 'cloudy';
        break;

        case SUN:
            return 'day-sunny';
        break;

        case RAIN:
            return 'rain';
        break;

        case SNOW:
            return 'snow';
        break;

        case WINDY:
        return 'windy';
        break;
    
        default:
             return 'cloud';
        break;
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
}


const WeatherTemperature = ({temperature , weatherState}) => (
    <div className="temperatureCont">
       { getWeatherIcon(weatherState) }
        <span className="temperature">{` ${temperature }`}</span>
        <span className="temperatureType">Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string,
}
export default WeatherTemperature;