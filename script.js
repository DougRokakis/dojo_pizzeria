var pizza = {
    crustTypes: ["deep dish", "hand tossed", "thin", "naan"],
    sauceTypes: ["traditional", "marinara", "alfredo", "olive oil"],
    cheeses: ["no cheese","mozzarella", "feta"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "jalapenos", "banana peppers"]
}

function pizzaOven(crustTypes, sauceTypes, cheeses, toppings){
    var pizza = {};
    pizza.crustTypes = crustTypes;
    pizza.sauceTypes = sauceTypes;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(){
    var pizza2 = {};
    pizza2.crustTypes = pizza.crustTypes[Math.floor(Math.random()*pizza.crustTypes.length)];
    pizza2.sauceTypes = pizza.sauceTypes[Math.floor(Math.random()*pizza.sauceTypes.length)];
    pizza2.cheeses = pizza.cheeses[Math.floor(Math.random()*pizza.cheeses.length)];
    pizza2.toppings = pizza.toppings[Math.floor(Math.random()*pizza.toppings.length)];
    return pizza2;
}

var pizzaOne = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);

var pizzaTwo = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

var pizzaThree = pizzaOven("naan", "olive oil", "no cheese", ["olives", "mushrooms", "onions", "jalapenos", "banana peppers"]);

var pizzaFour = randomPizza();

console.log(pizzaOne);

console.log(pizzaTwo);

console.log(pizzaThree);

console.log(pizzaFour);

