// more efficient than using ifs or switches...
// we can use an object called a hash map for multiple conditions...

const petSounds = {
  "dog": "woof",
  "cat": "meow",
  "bird": "chirp",
  "snake": "hiss",
  "fish": "bubbles, bubbles, bubbles",
  "cow": "moo",
  "wolf": "howl",
  "chicken": "cluck"
}

const pet = "bird";

console.log(petSounds[pet]);

// let's use another useful example:

const produce = {
  "apple": { price: 0.79, color: "red", sku: "4056" },
  "orange": { price: 0.99, color: "orange", sku: "3122" },
  "onion": { price: 0.99, color: "yellow", sku: "7163" },
}

const product = "orange"
// const price = produce[product].price
const { price, color, sku } = produce[product]

console.log(`${product} is ${color} and costs $${price}.`)


// NOT GREAT FOR INEQUALITIES:
const grades = {
  "100": "A", "90": "A", "80": "B", "70": "C", "60": "D",
}

const grade = 32; // 7.2 -- 7 -- 70 -- "70"

console.log(grades[Math.floor(grade / 10)*10 + ""] || "F");
