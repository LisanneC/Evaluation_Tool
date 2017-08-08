import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import StudentItem from './StudentItem'

chai.use(chaiEnzyme())

const student =
  {
    firstName: 'John',
    lastName: 'How',
    colour: 'Green',
  }

  describe('<StudentItem />', () => {
  const container = shallow(<StudentItem { ...student } />)

  it('is wrapped in a article tag with class name "batch"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('batch')
  })

})
