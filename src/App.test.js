import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains a Title', () => {
    expect(app).to.have.descendants(Title)
  })

  it('sets the Title to "Hello"', () => {
    expect(app).to.contain(<Title content="Hello" />)
  })

  it('contains the BatchesContainer', () => {
    expect(app).to.have.descendants(BatchesContainer)
  })
})
