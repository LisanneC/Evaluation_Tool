import { expect } from 'chai'
import students from './students'

describe('students reducer', () => {
  const reducer = students
  const initialState = [
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

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
