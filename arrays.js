const students = ['Sam', 'Cihan', 'Ariana', 'Yaslin', 'Kevin']

console.log(students[2]) // Ariana

console.log(students.length) // 5

students.push('Lorenzo')
students.unshift('Andrew')

console.log(students) // ['Andrew', 'Sam', 'Cihan', 'Ariana', 'Yaslin', 'Kevin', 'Lorenzo']

// Let's create an array of objects -- something we will see very commonly

const courses = [
  { title: 'Software Engineering', type: 'full-time', weeks: 10 }, // [0]
  { title: 'Game Dev', type: 'part-time', weeks: 3 }, // [1]
  { title: 'Data Analytics', type: 'part-time', weeks: 3 }, // [2]
]

console.log(courses[1].title) // 'Game Dev'
