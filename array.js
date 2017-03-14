function createArray(){
  var candyArray = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candyArray;
}

function addElementToArray (movies){
 var movies = ["Home Alone", "Jingle All the Way", "Santa Claus is Comin' to Town"];
 movies.push("A Christmas Story");
 return movies
}

function accessThirdElementFromArray (states){
  var states = ["Pennsylvania", "New York", "Virginia", "California"];
  console.log(states[3]);
  return states
}

function replaceElementInArray (names) {
  var names = ["Elena", "Jessica", "Brittany", "Jenna", "Karen"];
  names[1] = "Carter"
  return names
}

function returnElementFromArray (dishes){
  var dishes = ["Fried Chicken", "Grilled Chicken", "Rotisserie Chicken", "Buffalo Chicken", "Barbeque Chicken"];
  dishes.splice(2, 3, "Roast Chicken");
  return dishes
}

function iterateArray (numbers){
  var numbers = ["1", "2", "3", "3", "4", "5"];
  var newNums = [numbers.forEach(+ 5)];
  return newNums
}
