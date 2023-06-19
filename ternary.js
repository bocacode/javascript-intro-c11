// A ternary is a short-hand if/else statement.

// it has the form:
// (condition) ? _____ : _______;

const pet = "dog";

// So instead of writing:

// let petSound;
// if(pet === "dog") {
//   petSound = "woof";
// } else {
//   petSound = "meow";
// }

// First a slightly better way:

// let petSound = "meow";
// if(pet === "dog") {
//   petSound = "woof";
// }

// Now let's use a ternary:

const petSound = (pet === "dog") ? "woof" : "meow";

// for the experts:
const sound = (pet === "dog")
                    ? "woof"
                    : (pet === "cat")
                            ? "meow"
                            : "chirp"
