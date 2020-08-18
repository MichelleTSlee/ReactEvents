import React from "react";
import animals from "../data.js";

console.log(animals);
const [cat, dog] = animals;
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
console.log(food);
const [animalName, makeSound] = useAnimal(cat);
console.log(animalName);
makeSound();

function useAnimal(animal) {
  return [
    animal.name,
    function makeSound() {
      console.log(animal.sound);
    },
  ];
}

function Animal() {
  return <div></div>;
}

export default Animal;
