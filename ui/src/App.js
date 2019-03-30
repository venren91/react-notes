import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Notes from './components/Notes';
import { createStore } from 'redux'
import rootReducer from './reducers/RootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

class App extends Component {

  render() {
    const notes = []
    notes.push({id: 1, title:'my first Note', content: 'some random content'})
    return (
        < Provider store={store}>
          <div className="App">
            <Notes notes={notes}/>
          </div>
        </Provider>
      
    );
  }
}

export default App;
