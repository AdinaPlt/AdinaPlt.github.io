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

function add(q1, q2, q3, q4) {
  console.info("sum is: " + (q1 + q2) + q3 + q4++);
  console.info("last number is:" + q4);
}
add(1, 5, 8, 3);

document.body.innerHTML += [
  '<article id ="q11result">',
  '<div id = "x">X</div>',
  '<div name = "y">Y</div>',
  "</article>";
var e1 = document.getElementById("x");
e1.innerHTML = "A";
var e2 = document.getElementByName("y");
e1.innerHTML = "B";

console.log(document.getElementById("q11result").innerText);

const numbers [7, 5, 1, 8, 2, 3];
numbers[2] = 0;
numbers.sort();
numbers.push(2);
numbers.forEach((number) => {
  if (number % 2 === 0) {
    console.infor(number);
  }
});

document.body.innerHTML += [
  '<article class="html">',
  '<div class="clas1">Adrian</div>',
  '<p id="any">Bichir</p>',
  '<span class="blue favorite">Cristi</span>',
  '<ul id="all">',
  "<li>David</li>",
  "<li>Florin</li>",
  "</ul>",
  "</article>",
  "<style>",
  "#cls1, #any, #all li {",
" color: red;",
"}",
"</style>"
].join("\n");

var model = "320";
var make = "FORD";
var car= {
  make: "BMW",
  model: "118",
  info: function () {
    console.log ("My car is a: " + this.make + " " + model);
  }
};
car.info();


function calc(n) {
  let sum=0;
  for (let i=1; i<=n; i++){
    sum+=i;
  }
  return sum;
}
console.info(calc(4));

function load() {
  return "ABCDEFGHIJKLMNOP";
}
function chained() {
return load().toLowerCase().substring(2, 4);
}
function steps() {
  const text = load();
  const lower = text.toLowerCase();
  const result = lower.substring(2, 4);
return result;
}
const c = chained();
const s = steps();
console.info(c);
console.info(s);
console.info(c === s);


try {
  var firstName = "Tibi";
  var person = {
    firstName: "Andrei",
    lastName: "Vasilica",
    call: function () {
      console.log("My name is: " + firstName + lastName);
    }
  };
  person.call();
  } catch (e) {
    console.error(e);
  }

  function load( {
    return: ABCDEFGHIJKLMNOP
  }
  function chained(){
    load().toLowerCase().substring(2, 4);
  }
  function steps() {
const text = load();
const lower = text.toLowerCase();
const result = lower.substring(2, 4);
return result;
  }
  const c = chained();
  const s = steps();
  console.info(c);
  console.info(s);
  console.info(c === s);

  