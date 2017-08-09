
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

export default (state = students, { type, payload } = {}) => {
  return state
}
