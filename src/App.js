import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'

const students = [
  {
    firstName: 'John',
    lastName: 'How',
    colour: 'Green',
  },
  {
    firstName: 'Mariam',
    lastName: 'Are',
    colour: 'Green',
  },
  { firstName: 'Dennis',
    lastName: 'You',
    colour: 'Orange',
  },
  { firstName: 'Joey',
    lastName: 'Feelin',
    colour: 'Orange',
  },
  { firstName: 'Ann',
    lastName: 'Today',
    colour: 'Green',
  },
  ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Title content="Hello" />
        </div>
        <div>
          <BatchesContainer batches={ students } />
        </div>
      </div>
    );
  }
}

export default App;
