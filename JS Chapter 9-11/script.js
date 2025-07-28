// 1. City Name
var city = prompt("Enter your city:");
if (city === "Karachi") {
  alert("Welcome to city of lights");
}

// 2. Gender
var gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma’am.");
}

// 3. Traffic Signal
var color = prompt("Enter traffic signal color (Red/Yellow/Green):");
if (color === "Red") {
  alert("Must Stop");
} else if (color === "Yellow") {
  alert("Ready to move");
} else if (color === "Green") {
  alert("Move now");
}

// 4. Fuel Check
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// 5. Condition Checking
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  // will not run
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Marks Sheet
var sub1 = parseInt(prompt("Enter marks for Subject 1:"));
var sub2 = parseInt(prompt("Enter marks for Subject 2:"));
var sub3 = parseInt(prompt("Enter marks for Subject 3:"));
var totalMarks = parseInt(prompt("Enter total marks:"));
var obtained = sub1 + sub2 + sub3;
var perc = (obtained / totalMarks) * 100;
var grade, remarks;

if (perc >= 80) {
  grade = "A-one"; remarks = "Excellent";
} else if (perc >= 70) {
  grade = "A"; remarks = "Good";
} else if (perc >= 60) {
  grade = "B"; remarks = "You need to improve";
} else {
  grade = "Fail"; remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + perc.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br><hr>");

// 7. Guess Game
var secret = 5;
var guess = parseInt(prompt("Guess the secret number (1-10):"));
if (guess === secret) {
  alert("Bingo! Correct answer");
} else if (guess + 1 === secret || guess - 1 === secret) {
  alert("Close enough to the correct answer");
}

// 8. Divisible by 3
var num1 = parseInt(prompt("Enter a number:"));
if (num1 % 3 === 0) {
  alert("The number is divisible by 3");
} else {
  alert("Not divisible by 3");
}

// 9. Even or Odd
var num2 = parseInt(prompt("Enter a number:"));
if (num2 % 2 === 0) {
  alert("Even number");
} else {
  alert("Odd number");
}

// 10. Temperature
var temp = parseInt(prompt("Enter temperature:"));
if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today’s Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

// 11. Calculator
var numA = parseFloat(prompt("Enter first number:"));
var numB = parseFloat(prompt("Enter second number:"));
var op = prompt("Enter operation (+, -, *, /, %):");
var result;

if (op === "+") {
  result = numA + numB;
} else if (op === "-") {
  result = numA - numB;
} else if (op === "*") {
  result = numA * numB;
} else if (op === "/") {
  result = numA / numB;
} else if (op === "%") {
  result = numA % numB;
} else {
  result = "Invalid operation";
}

alert("Result: " + result);
