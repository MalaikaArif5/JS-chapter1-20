// 1. Declare 3 variables in one statement
var firstName = "Ali", lastName = "Khan", age = 25;

// 2. Declare 5 legal variable names
var myName, $amount, _total, user123, city_name;

// 3. Declare 5 illegal variable names (just comments, not actual code)
// var 1name;
// var full-name;
// var var;
// var @home;
// var user name;

// 4. Display rules in browser
var rulesText = "";
rulesText += "a) Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable<br>";
rulesText += "b) Variables must begin with a letter, $ or _. For example: $name, _name or name<br>";
rulesText += "c) Variable names are case sensitive<br>";
rulesText += "d) Variable names should not be JS reserved keywords";

document.getElementById("rules").innerHTML = rulesText;
