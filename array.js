function createArray(){
  var candyArray = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candyArray;
}

function addElementToArray (movies){
 movies.push("A Christmas Story");
 return movies
}

function accessThirdElementFromArray (states){
  console.log(states[3]);
  return states
}

function replaceElementInArray (names) {
  names[1] = "Carter"
  return names
}

function returnElementFromArray (dishes){
  dishes.splice(2, 3, "Roast Chicken");
  return dishes
}

function iterateArray (numbers){
  var newNums = numbers.forEach(function(number) {
    console.log(number + 5)
  });
  return newNums
}
