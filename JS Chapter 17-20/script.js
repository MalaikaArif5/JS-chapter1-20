// 1. Empty Multidimensional Array
var multiArr = [[], [], []];

// 2. Matrix Representation
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write('<h3>Matrix:</h3>');
for (var i = 0; i < matrix.length; i++) {
  document.write(matrix[i].join(' ') + '<br>');
}

// 3. Counting from 1 to 10
document.write('<h3>Counting from 1 to 10:</h3>');
for (var i = 1; i <= 10; i++) {
  document.write(i + '<br>');
}

// 4. Multiplication Table
var tableNumber = parseInt(prompt('Enter table number:'));
var tableLength = parseInt(prompt('Enter table length:'));
document.write('<h3>Multiplication Table of ' + tableNumber + ':</h3>');
for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + ' x ' + i + ' = ' + (tableNumber * i) + '<br>');
}

// 5. Array Items using Loop
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.write('<h3>Fruits List:</h3>');
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + '<br>');
}

// 6. Series Generation
document.write('<h3>a. Counting:</h3>');
for (var i = 1; i <= 15; i++) {
  document.write(i + ', ');
}

document.write('<h3>b. Reverse Counting:</h3>');
for (var i = 10; i >= 1; i--) {
  document.write(i + ', ');
}

document.write('<h3>c. Even:</h3>');
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ', ');
}

document.write('<h3>d. Odd:</h3>');
for (var i = 1; i < 20; i += 2) {
  document.write(i + ', ');
}

document.write('<h3>e. Series (k):</h3>');
for (var i = 2; i <= 20; i += 2) {
  document.write(i + 'k, ');
}

// 7. Search Item
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userItem = prompt('Welcome to ABC Bakery. What do you want to order?').toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === userItem) {
    found = true;
    break;
  }
}
if (found) {
  alert(userItem + ' is available at index ' + i + ' in our bakery.');
} else {
  alert('We are sorry. ' + userItem + ' is not available in our bakery.');
}

// 8. Largest Number
var nums = [24, 53, 78, 91, 12];
var max = nums[0];
for (var i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
document.write('<h3>Largest Number:</h3>' + max);

// 9. Smallest Number
var min = nums[0];
for (var i = 1; i < nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
  }
}
document.write('<h3>Smallest Number:</h3>' + min);

// 10. Multiples of 5 (1 to 100)
document.write('<h3>Multiples of 5 (1-100):</h3>');
for (var i = 5; i <= 100; i += 5) {
  document.write(i + ', ');
}
