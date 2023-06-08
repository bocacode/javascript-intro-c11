const student = {
  firstName: 'Lorenzo',
  lastName: 'Mokwa',
  age: 19,
  awesome: true,
}

console.log(student.firstName)

// -------------- let's get a bit more advanced ----------------

// Creating an object from separate variables:

const make = 'Audi'
const model = 'A3'
const year = 2018

const myCar1 = { 
  make: make, // 'Audi'
  model: model, // 'A3'
  year: year, // 2018
}

const myCar = { make, model, year } // assembled 3 variables into a single object

// Frequently, we have an object and we want to break it into separate variables

// *** This is called "destructuring". ***

// we have an object:

const movie = {
  title: 'Fight Club',
  writer: 'Chuck P.',
  year: 1999,
  genre: 'Action',
}

// lame way:

// const title = movie.title
// const writer = movie.writer
// const genre = movie.genre

// or we can be awesome and write:

const { title, writer, genre } = movie

console.log(title) // 'Fight Club'

