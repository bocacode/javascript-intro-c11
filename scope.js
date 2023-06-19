// Scope refers to where a variable (or function) is available.

// With "export", we can make variables and functions available
// to other modules.

// But let's focus on what's happening inside a single module.

// We can define a variable (or function) "Globally", which means
// it is available ANYWHERE inside the module.

const firstName = "Ariana"; // this is now global

const lastName = "Diaz";

if(lastName === "Diaz") {
  const message = "Good Morning!" // This variable is ONLY available inside
  // this if statement
}

// console.log(message); // This throws an error because message is not in scope

let greeting;

if(firstName === "Ariana") {
  greeting = "Hello " + firstName;
}

console.log(greeting);

const pet = "dog";

let petSound;

if(pet === "dog") {
  petSound = "woof";
} else {
  petSound = "meow";
}

// Let's introduce the ternary... in a minute...
// (see ternary.js)


function getBirthday(person) {
  let birthday;
  if(person === 'Noah') {
    birthday = "Nov. 3";
  } else {
    birthday = "Oct. 17";
  }
  return birthday;
}

const birthday = getBirthday('Noah');
console.log(birthday);


