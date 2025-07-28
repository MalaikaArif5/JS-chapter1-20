var output = "";

// Task 1
var a = 10;
output += "1. The value of a is: " + a + "\n";
output += "-------------------------\n";
output += "The value of ++a is: " + (++a) + "\n";
output += "Now the value of a is: " + a + "\n";
output += "The value of a++ is: " + (a++) + "\n";
output += "Now the value of a is: " + a + "\n";
output += "The value of --a is: " + (--a) + "\n";
output += "Now the value of a is: " + a + "\n";
output += "The value of a-- is: " + (a--) + "\n";
output += "Now the value of a is: " + a + "\n\n";

// Task 2
var a2 = 2, b2 = 1;
var result = --a2 - --b2 + ++b2 + b2--;
output += "2. Result of expression:\n";
output += "Initial a = 2, b = 1\n";
output += "--a => " + a2 + "\n";         // 1
output += "--a - --b => " + (1 - 0) + "\n"; // a=1, b=0
output += "--a - --b + ++b => " + (1 - 0 + 1) + "\n"; // b = 1
output += "--a - --b + ++b + b-- => " + result + "\n";
output += "Final values: a = " + a2 + ", b = " + b2 + ", result = " + result + "\n\n";

// Task 3: User name greeting
var userName = prompt("Enter your name:");
alert("Welcome, " + userName + "!");
output += "3. Greeted the user with name: " + userName + "\n\n";

// Task 5: Multiplication Table
var tableNum = prompt("Enter a number for multiplication table", "5");
tableNum = parseInt(tableNum);
if (isNaN(tableNum)) {
  tableNum = 5;
}
output += "5. Multiplication Table of " + tableNum + ":\n";
for (var i = 1; i <= 10; i++) {
  output += tableNum + " x " + i + " = " + (tableNum * i) + "\n";
}
output += "\n";

// Task 6: Subjects and Marks
var sub1 = prompt("Enter subject 1:");
var sub2 = prompt("Enter subject 2:");
var sub3 = prompt("Enter subject 3:");
var totalMarks = 100;

var marks1 = parseInt(prompt("Enter marks for " + sub1 + ":"));
var marks2 = parseInt(prompt("Enter marks for " + sub2 + ":"));
var marks3 = parseInt(prompt("Enter marks for " + sub3 + ":"));

var obtained = marks1 + marks2 + marks3;
var percent = (obtained / (3 * totalMarks)) * 100;

output += "6. Marks Sheet:\n";
output += "Subject       Total   Obtained\n";
output += sub1 + "           " + totalMarks + "     " + marks1 + "\n";
output += sub2 + "           " + totalMarks + "     " + marks2 + "\n";
output += sub3 + "           " + totalMarks + "     " + marks3 + "\n";
output += "Total Marks: " + (3 * totalMarks) + "\n";
output += "Marks Obtained: " + obtained + "\n";
output += "Percentage: " + percent.toFixed(2) + "%\n";

document.getElementById("output").innerText = output;
