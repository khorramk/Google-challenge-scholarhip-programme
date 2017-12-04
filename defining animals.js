var eatsPlants = true;
var eatsAnimals = false;

var category = eatsPlants && eatsAnimals ? "omnivores" : eatsPlants ? "herbivores" : eatsAnimals ? "carnivores" : undefined;

console.log(category);
