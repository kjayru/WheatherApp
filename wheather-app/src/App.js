import React, { Component } from 'react';

import './App.css';
import WheatherLocation from './component/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Aplicación de clima</h4>
       <WheatherLocation></WheatherLocation>
      </div>
    );
  }
}

export default App;
