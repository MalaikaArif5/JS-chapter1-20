// 1. Empty array using literal
var studentNamesLiteral = [];

// 2. Empty array using object notation
var studentNamesObject = new Array();

// 3. Strings array
var stringsArray = ['Ali', 'Ahmed', 'Sara'];

// 4. Numbers array
var numbersArray = [10, 20, 30];

// 5. Boolean array
var booleanArray = [true, false, true];

// 6. Mixed array
var mixedArray = ['Apple', 25, true];

// 7. Education qualifications
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('<h3>Qualifications in Pakistan:</h3><ul>');
for (var i = 0; i < qualifications.length; i++) {
  document.write('<li>' + qualifications[i] + '</li>');
}
document.write('</ul>');

// 8. Student scores and percentages
var students = ['Michael', 'John', 'Tony'];
var scores = [400, 380, 420];
for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / 500) * 100;
  document.write('Score of ' + students[i] + ' is ' + scores[i] + '. Percentage: ' + percentage + '%<br>');
}

// 9. Color manipulation
var colors = ['Red', 'Green', 'Blue'];
document.write('<h3>Initial Colors:</h3>' + colors.join(', ') + '<br>');

// a. Add color to beginning
var colorStart = prompt('Which color to add at the beginning?');
colors.unshift(colorStart);
document.write('After adding at beginning: ' + colors.join(', ') + '<br>');

// b. Add color to end
var colorEnd = prompt('Which color to add at the end?');
colors.push(colorEnd);
document.write('After adding at end: ' + colors.join(', ') + '<br>');

// c. Add 2 more colors at beginning
colors.unshift('Purple', 'Orange');
document.write('After adding 2 at beginning: ' + colors.join(', ') + '<br>');

// d. Delete first color
colors.shift();
document.write('After removing first: ' + colors.join(', ') + '<br>');

// e. Delete last color
colors.pop();
document.write('After removing last: ' + colors.join(', ') + '<br>');

// f. Add color at specific index
var indexAdd = parseInt(prompt('At which index to add a color?'));
var colorName = prompt('Color name?');
colors.splice(indexAdd, 0, colorName);
document.write('After adding at index: ' + colors.join(', ') + '<br>');

// g. Delete colors at index
var indexDelete = parseInt(prompt('At which index to delete color(s)?'));
var countDelete = parseInt(prompt('How many colors to delete?'));
colors.splice(indexDelete, countDelete);
document.write('After deleting: ' + colors.join(', ') + '<br>');

// 10. Sort student scores
var studentScores = [320, 230, 480, 120];
studentScores.sort(function(a, b) { return a - b; });
document.write('<h3>Sorted Student Scores:</h3>' + studentScores.join(', ') + '<br>');

// 11. Copy city names
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
var selectedCities = cities.slice(2, 5);
document.write('<h3>Selected Cities:</h3>' + selectedCities.join(', ') + '<br>');

// 12. Join array to string
var arr = ['This', ' is', ' my', ' cat'];
document.write('<h3>Joined Sentence:</h3>' + arr.join('') + '<br>');

// 13. FIFO (Queue)
var fifoArray = [];
fifoArray.push('Keyboard');
fifoArray.push('Mouse');
fifoArray.push('Printer');
fifoArray.push('Monitor');
document.write('<h3>FIFO Output:</h3>');
for (var i = 0; i < fifoArray.length; i++) {
  document.write(fifoArray[i] + '<br>');
}

// 14. LIFO (Stack)
var lifoArray = [];
lifoArray.push('Keyboard');
lifoArray.push('Mouse');
lifoArray.push('Printer');
lifoArray.push('Monitor');
document.write('<h3>LIFO Output:</h3>');
for (var j = lifoArray.length - 1; j >= 0; j--) {
  document.write(lifoArray[j] + '<br>');
}

// 15. Phone manufacturers dropdown
var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<h3>Phone Manufacturers:</h3><select>');
for (var i = 0; i < manufacturers.length; i++) {
  document.write('<option>' + manufacturers[i] + '</option>');
}
document.write('</select>');
