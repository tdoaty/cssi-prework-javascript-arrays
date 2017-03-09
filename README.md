# JavaScript Arrays

## Objectives
+ Explain what an array is and why we use it
+ Create an array
+ Add an element to an array
+ Access an element in an array
+ Replace an element in an array
+ Delete an element from an array
+ Iterate over an array


## Instructions

You'll be coding along in `array.js`. There are tests to run to make sure you're on the right track.

## What is an Array?

An array is like a basket––it is a container for a collection of data. Let's take a closer look with the help of the following example.

So far, we've used variables to store information. For example, I could create a variable called `my_name` and set it equal to my name: `my_name = "Severus Snape"`. However, variables only allow us to store one piece of information at a time.

What if my boss, Headmaster Dumbledore, asks me to deliver the names of all of my students? I could create a bunch of variables like this:

```ruby
var student1 = "Harry Potter"
var student2 = "Ron Weasley"
var student3 = "Hermione Granger"
var student4 = "Draco Malfoy"

etc...
```

Then, I could write a program that passes around these variables *one at a time*. This seems messy though. I could easily forget about a student, for example. Or need to create a new student and then have to hunt through my program for every place I ever passed around all of these individual variables.

If this was real life, Professor Snape would probably just write down all the students in list form and hand that list to Dumbledore. In Javascript, we can do the same thing using an array.

### Array Definition

An array is like a list but in code form. It is a way for your program to store pieces of data as a *collection*. Arrays can contain any data types in any combination––strings, integers, other arrays, hashes, etc.

Arrays are declared by listing variable names or literals separated by commas (`,`) and wrapped in square brackets `[``]`. To save our four students from above into an array, we write that in our code like this:

```javascript
var students = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"]
```

## Why Use Arrays

Arrays store information in list form. It's hard to imagine a program you will write in which you *won't* be dealing with collections of data. Whether you're making a command line game or writing a large-scale web application with many users, data is the name of the game. You may need to list the players of your game and their scores, you may need to list the users of your application. You might have an application that connects doctors and their patients and therefore lists the patients of an individual doctor. This list goes on (pun intended).

Arrays allow us to store a collection of information in one organized place. Arrays can be named, i.e. set equal to a variable, and we can access data from an array, add data to an array or change the data that is already stored in an array.

## Creation

You can create arrays in two different ways, the most common of which is to list values in a pair of square brackets. These are called array literals.

Syntax:

```javascript
var arrayName = [element0, element1, ..., elementN];
```

Examples:

```javascript
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = [ "he", 110, "w", 0, "r", {"1":"d"} ];

var empty = [];
```

The Array constructor is another approach to making a new JavaScript array.

```javascript
var evenNumbers = new Array();
```

+ **You Do:** In array.js, define a function called `createArray`. The function does not need to accept an argument, but should return an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.

## Adding an Element
### At the end of an Array
To add elements to the end of the array, you can use the array method `push`. Take a look at the code below:

```javascript
var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");
// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]
```

### At a specific index
To add elements to an array at specific indexes, you use the bracket equals notation. This notation will also work for replacing values.

Let's add three elements to our empty `evenNumbers` array. First, decide what index you want your element to have (remember the first element in an array has an index of 0). Then you wrap this desired index in brackets, place the array's variable name directly to the left. Remember to place an equal sign to the right of the closing square bracket, and put the value that you want your element to have after the equal sign.

```javascript
var evenNumbers = new Array();

evenNumbers[0] = 2;
evenNumbers[1] = 4;
evenNumbers[3] = 8;

// evenNumbers is now [ 2, 4, undefined, 8 ]
```

Notice that since we didn't tell JavaScript what value we wanted the third element to have, it defaulted to `undefined`. It's also important to know that using the square bracket notation to add an item at a specific index will **replace whatever was at that index.**


+ **You Do:** Define a function `addElementToArray`, that accepts an array as a parameter. The function should  add `"A Christmas Story"` to the end of the array. The function should return the entire array.

## Accessing an Element

You can get elements out of arrays if you know their index. Just like with strings, array elements' indexes start at 0 and increment by 1, so the first element's index is 0, the second element's index is 1, the third element's is 2, etc.

```javascript
var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];

// the line below will print the string "Elizabeth Holmes"
console.log(entrepreneurs[0]);

// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

// the line below will return undefined
entrepreneurs[9];
```

+ **You Do:** Define a function `accessThirdElementFromArray`. The function should accept an array of states as an argument and return the third item in the array.

## Replacing an Element

Say you have an array of author names, and you would like to replace the second element, J. D. Salinger, with the string "Harper Lee". Since the second element has an index of 1, you simply reassign using the index number:

```javascript
var authors = ["Ray Bradbury", "J. D. Salinger", "Maya Angelou"];

authors[1] = "Harper Lee";
// authors is now ["Ray Bradbury", "Harper Lee", "Maya Angelou"];
```

+ **You Do:** Define a function `replaceElementInArray` which should accept an array of names as an argument. The function should replace the second item in the array with `"Carter"`. The function should return the modified array.

## Removing an Element

To remove an element in JavaScript, you can call on the `splice()` function. This function takes two required arguments and some optional arguments:

1. index to start at (required)
2. number of elements to remove (required)
3. an element to add to the array (optional)
4. an element to add to the array (optional)
5. etc.

```javascript
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'surgeon'];

// removes 1 element from index 3
var firstRemovedFish = myFish.splice(3, 1);

// myFish is now ['angel', 'clown', 'drum', 'surgeon']
// firstRemovedFish is ['mandarin']

// removes 1 element from index 2, and inserts 'trumpet'
var secondRemovedFish = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// secondRemovedFish is ['drum']

// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
var removedFishes = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// removedFishes is ['angel', 'clown']
```

+ **You Do:** Define a function `removeElementFromArray` that take an array of dishes as a parameter. The function should remove the third and fourth item from the array, and adds "Roast Chicken" to the end, using the `splice` function. The function should return the updated array.

## Iteration

JavaScript's `forEach` function will help you to iterate - repeat an action - through an array. The forEach method executes a provided function once per array element.

The first argument in the example function below is the variable name for currentValue, letter. 

```javascript
var letters = ["z", "y", "x", "w", "v", "u", "t", "s"];

letters.forEach(function(letter) {
  console.log("♫ " + letter + " ♬");
});
// this will print the following to the console:
// ♫ z ♬
// ♫ y ♬
// ♫ x ♬
// ♫ w ♬
// ♫ v ♬
// ♫ u ♬
// ♫ t ♬
// ♫ s ♬
```

You can also instruct JavaScript to keep track of the index number of the element it is currently on. To do this, pass the provided function a second argument, index:

```javascript
var letters = ["z", "y", "x", "w", "v", "u", "t", "s"];

letters.forEach(function(letter, index) {
  var number = index + 1;
  console.log(number + ". " + letter);
});
// this will print the following to the console:
// 1. z
// 2. y
// 3. x
// 4. w
// 5. v
// 6. u
// 7. t
// 8. s
```

+ **You Do:** Write a function `iterateArray` that accepts an array of numbers as a parameter. The body should also contain an empty array, stored in the variable `newNums`. You should iterate over the array of numbers, add 5 to each number, and store the larger number in the array `newNums`. The function should return the `newNums` array.


## Resources

* [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Codecademy - Arrays](http://www.codecademy.com/glossary/javascript)
