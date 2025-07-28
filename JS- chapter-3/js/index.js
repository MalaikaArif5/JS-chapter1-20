function showAge() {
  var age = 20;
  alert("I am " + age + " years old");
}

function showVisits() {
  var visits = 5; // Static count or mock value
  alert("You have visited this site " + visits + " times");
}

function showBirthYear() {
  var birthYear = 2004;
  var output = "My birth year is " + birthYear + "<br>Data type of my declared variable is number";
  document.getElementById("output").innerHTML = output;
}

function showOrder() {
  var name = "John Doe";
  var product = "T-shirt(s)";
  var quantity = 5;
  var message = name + " ordered " + quantity + " " + product + " on XYZ Clothing store";
  document.getElementById("output").innerHTML = message;
}
