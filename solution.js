"use strict";
/* 
#### 1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print the values.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
]; */

console.log(`*******01*******`);

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}

/* 
#### 2. Doggo
* 2.1 Create a doggo object. Add name and breed as properties of the object.
* 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods. 
* 2.4 Add a method that loops through and print all the doggo's favorite food. */

console.log(`*******02---2.3*******`);
const doggo = {
  dogName: "Afghan Hound",
  breed: "Afghan",
  favoriteFoods: [
    "Oatmeal",
    "Boiled Eggs",
    "Yogurt",
    "Raw Chicken/Turkey Neck and raw bones",
  ],
};

const {
  favoriteFoods: [, secondFood],
} = doggo;
console.log(secondFood);

console.log(`*******02---2.4*******`);
const {
  favoriteFoods: [...all],
} = doggo;

for (const el of all) {
  console.log(el);
}

/* 
#### 3. 
* 3.1 Create an object called recipes.
* 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
* 3.4 Change the ingredient `sugar` to `brown sugar`. 
* 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
 */

console.log(`*******03---3.1 and 3.2*******`);
const recipes = {
  ingredients: {
    ing1: "butter",
    ing2: "sugar",
    ing3: "flour",
  },
};

console.log(recipes);
console.log(`*******03---3.3*******`);
recipes.ingredients.ing4 = "ginger";
console.log(recipes);
console.log(`*******03---3.4*******`);
recipes.ingredients.ing2 = "brown sugar";
console.log(recipes);
console.log(`*******03---3.5*******`);

const recipes1 = {
  ingredients: {
    ing1: "butter",
    ing2: "sugar",
    ing3: "flour",
  },

  printIngredients() {
    for (const el in this.ingredients) {
      console.log(this.ingredients[el]);
    }
  },
};

recipes1.printIngredients();
