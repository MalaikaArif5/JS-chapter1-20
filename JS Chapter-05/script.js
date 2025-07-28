var output = "";

output += "1. Add two numbers:\n";
var num1 = 5, num2 = 7;
var sum = num1 + num2;
output += "Sum: " + sum + "\n\n";

output += "2. Subtraction, Multiplication, Division, Modulus:\n";
output += "Subtraction: " + (num1 - num2) + "\n";
output += "Multiplication: " + (num1 * num2) + "\n";
output += "Division: " + (num1 / num2) + "\n";
output += "Modulus: " + (num1 % num2) + "\n\n";

output += "3. Variable Manipulation:\n";
var a;
output += "a) Value after declaration: " + a + "\n";
a = 5;
output += "b) Initial value: " + a + "\n";
a++;
output += "c) After increment: " + a + "\n";
a += 7;
output += "d) After adding 7: " + a + "\n";
a--;
output += "e) After decrement: " + a + "\n";
output += "f) Remainder after dividing by 3: " + (a % 3) + "\n\n";

output += "4. Movie Ticket Cost:\n";
var ticketPrice = 600;
output += "Total cost for 5 tickets: " + (ticketPrice * 5) + " PKR\n\n";

output += "5. Multiplication Table of 4:\n";
var tableNum = 4;
for (var i = 1; i <= 10; i++) {
  output += tableNum + " x " + i + " = " + (tableNum * i) + "\n";
}
output += "\n";

output += "6. Temperature Converter:\n";
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
output += celsius + "°C is " + fahrenheit + "°F\n";
fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
output += fahrenheit + "°F is " + celsius + "°C\n\n";

output += "7. Shopping Cart:\n";
var item1 = 650, qty1 = 3;
var item2 = 100, qty2 = 7;
var shipping = 100;
var total = (item1 * qty1) + (item2 * qty2) + shipping;
output += "Total cost: " + total + " PKR\n\n";

output += "8. Marks & Percentage:\n";
var totalMarks = 980, marksObtained = 804;
var percent = (marksObtained / totalMarks) * 100;
output += "Percentage: " + percent + "%\n\n";

output += "9. Currency Conversion:\n";
var usd = 10, riyal = 25;
var pkr = (usd * 104.8) + (riyal * 28);
output += "Total in PKR: " + pkr + "\n\n";

output += "10. Single Expression Calculation:\n";
var number = 10;
var result = ((number + 5) * 10) / 2;
output += "Result: " + result + "\n\n";

output += "11. Age Calculator:\n";
var currentYear = 2025, birthYear = 2003;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
output += "They are either " + age2 + " or " + age1 + " years old.\n\n";

output += "12. Geometrizer:\n";
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
output += "Circumference: " + circumference + "\n";
output += "Area: " + area + "\n\n";

output += "13. Lifetime Supply Calculator:\n";
var snack = "Lays";
var age = 22;
var maxAge = 80;
var perDay = 2;
var totalSnacks = (maxAge - age) * 365 * perDay;
output += "You will need " + totalSnacks + " " + snack + " to last until age " + maxAge + ".";

document.getElementById("output").innerText = output;
