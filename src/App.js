import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Notes from './components/Notes';

class App extends Component {
  render() {
    const notes = []
    notes.push({id: 1, title:'my first Note', content: 'some random content'})
    return (
        <div className="App">
          <Notes notes={notes}/>
        </div>
      
    );
  }
}

export default App;
