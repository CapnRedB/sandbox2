import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Desc from './components/Desc';
import Profile_Pic from './components/Profile_Pic';

var test= "YO, WHAT'S UP"
class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
							<Name/>
							<Desc/>
							<Profile_Pic/>
      </div>
    );
  }
}

export default App;
