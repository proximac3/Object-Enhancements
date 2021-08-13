// Same keys and values
const createInstructor = (firstName, lastName) => ({ firstName, lastName })

// Computed Property Names
const favoriteNumber = 42;
const instructor = {
    firstName: `Colt`
}
instructor[favoriteNumber] = "That is my favorite!"

// Object Methods
const instructor1 = {
    firstName: `colt`,

    sayHi() {
        return `Hi!`
    },

    sayBye() {
        return `${this.firstName} says bye!`
    },
};

// createAnimal function
const generateAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return [noise]
        }
    }
}
const dog = generateAnimal("dog", "bark", "Woooof!")



