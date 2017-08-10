//random number
const getRandom = Math.floor((Math.random() * 10) + 1);
console.log(getRandom)

//colour
function selectColour (randomNumber) {
 if (randomNumber <= 5) return 'Red';
 if (randomNumber <= 8) return 'Orange';
 if (randomNumber <= 10) return 'Green';
 };

const color = selectColour(getRandom); // part one random select number and associate with colour
console.log(color)

 const students = [
 		{firstName: 'John', colour: 'Green'},
    {firstName: 'Mariam', colour: 'Orange'},
    {firstName: 'Dennis', colour: 'Orange'},
    {firstName: 'Joey', colour: 'Red'},
    {firstName: 'Ann', colour: 'Red'},
    {firstName: 'Liz', colour: 'Red'},
    {firstName: 'Hannah', colour: 'Red'},
    {firstName: 'Greg', colour: 'Green'},
  ];

 const filtered = students.filter((student) => {
 	if (student.colour === color) return student
 })

 console.log('filtered students: ', filtered); // part two filtered students with that colour

const selectStudent = filtered[Math.floor(Math.random()*filtered.length)]
console.log(selectStudent);                   // part three random select a student of that colour
