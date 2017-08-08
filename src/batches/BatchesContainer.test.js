import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import BatchesContainer from './BatchesContainer'
import StudentItem from './StudentItem'

chai.use(chaiEnzyme())

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
    lastName: 'Fellin',
    colour: 'Orange',
  },
  { firstName: 'Ann',
    lastName: 'Today',
    colour: 'Green',
  },
  ]

describe('<BatchesContainer />', () => {
  const container = shallow(<BatchesContainer batches={students} />)

  it('is wrapped in a div with class name "batches"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('batches')
  })
  it('renders all students as a StudentItem', () => {
    expect(container).to.have.exactly(5).descendants(StudentItem)

  })
})
