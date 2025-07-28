// 1. Check character type
var char = prompt("Enter a character (1 letter or number):");
var code = char.charCodeAt(0);
if (code >= 48 && code <= 57) {
  alert("It is a number");
} else if (code >= 65 && code <= 90) {
  alert("It is an uppercase letter");
} else if (code >= 97 && code <= 122) {
  alert("It is a lowercase letter");
} else {
  alert("Unknown input");
}

// 2. Compare two integers
var int1 = parseInt(prompt("Enter first integer:"));
var int2 = parseInt(prompt("Enter second integer:"));
if (int1 > int2) {
  alert("Larger number is: " + int1);
} else if (int2 > int1) {
  alert("Larger number is: " + int2);
} else {
  alert("Both numbers are equal");
}

// 3. Check positive, negative, zero
var num = parseFloat(prompt("Enter a number:"));
if (num > 0) {
  alert("Positive number");
} else if (num < 0) {
  alert("Negative number");
} else {
  alert("Zero");
}

// 4. Vowel check
var vowel = prompt("Enter one letter:").toLowerCase();
if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
  alert(true);
} else {
  alert(false);
}

// 5. Password check
var correctPassword = "abc123";
var userPass = prompt("Enter your password:");
if (!userPass) {
  alert("Please enter your password");
} else if (userPass === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// 6. Fix if/else bug
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);

// 7. Time greeting
var time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900):"));
if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time format");
}
