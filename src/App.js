import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Note from './components/Note';

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <Note/>
          </div>
      
    );
  }
}

export default App;
