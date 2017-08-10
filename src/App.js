import React, { PureComponent } from 'react';
import './App.css';
import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'

class App extends PureComponent {
  updateStudent(id, update) {
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Title content="Hello" />
        </div>
        <div>
          <BatchesContainer updateStudent={ this.updateStudent.bind(this) } />
        </div>
      </div>
    );
  }
}

export default App;
