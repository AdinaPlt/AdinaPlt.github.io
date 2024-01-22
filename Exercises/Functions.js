//exercise 1 - Parameters & Arguments
function sayHI(username, city, street) {
  console.log("Salut!");
  console.log(`Salut, ${username}!`);
  console.log(`Cand vii in ${city}?`);
  console.log(`Nu stiu inca.`);
  console.log(`Tot pe ${street} locuiesti?`);
  console.log("Da.");
}

sayHI("Adina", "Cluj", "Rozelor");

//exercise 2 - Return
function sum(a, b) {
  return a + b;
}
let result = sum(1, 5);
console.log(sum(3, 5));

function subtract(a, b) {
  return a - b;
}
console.log(subtract(3, 5));

function divide(a, b) {
  return a / b;
}
console.log(divide(8, 2));

function isOdd(number) {
  //  if (number % 2 === 1) {
  //    return true;
  // } else {
  //   return false;
  return number % 2 === 1 ? true : false;
  // }
}

console.log(isOdd(1));

function name() {
  if ("yes" == "yes") {
    console.log("yes");
  }
}
name();

[{"name": "Vasilica", "age": "20"};]
{name: "Vasilica", "age": "20"};
{"name": "Vasilica", "age": "20"}

var s = 'text';
var s = "text';
var s = '"text';
var s = "text';
var s = '"text';
var s = 'text";

var firstName = "Ionel";
var lastName = "Popescu";
var fullName = `${firstName} {lastName}`;
console.info(fullName);
