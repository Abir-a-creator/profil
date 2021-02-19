
import './App.css';
import Profile from './Component/Profile';
import React, { Component } from 'react';

class App extends Component {
  state = {  }
  render() { 
    return ( <>
     <div className="App">
       <h1 style={{color:'pink'}}>Oprah Winfery Profile</h1>
      
      <Profile name="Oprah Winfery" bio="was born in  January 29, 1954" profession="a talk show host, media executive, actress and billionaire philanthropist."/>
    </div>
    </> );
  }
}
 
export default App;