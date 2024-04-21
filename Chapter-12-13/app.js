// Q1) 

// var inputChar = prompt("Enter a character (number or letter):");

// // Extract the first character from the input
// var firstChar = inputChar.charAt(0);

// // Get the ASCII code of the character
// var charCode = firstChar.charCodeAt(0);

// // Check if the character is a number
// if (charCode >= 48 && charCode <= 57) {
//     alert(firstChar + " is a number.");
// }
// // Check if the character is an uppercase letter
// else if (charCode >= 65 && charCode <= 90) {
//     alert(firstChar + " is an uppercase letter.");
// }
// // Check if the character is a lowercase letter
// else if (charCode >= 97 && charCode <= 122) {
//     alert(firstChar + " is a lowercase letter.");
// }
// // If the character is none of the above
// else {
//     alert(firstChar + " is neither a number nor a letter.");
// }

// Q2

// let int1 = +prompt("Enter 1st integer");
// let int2 = +prompt("Enter 2nd integer");

// if (int1 > int2) {
//     alert(int1);
// }
// else if (int2 > int1) {
//     alert(int2)
// }
// else if (int1 == int2) {
//     alert("Both are equal");
// }

// Q3)

// let num = +prompt("Enter any number");
// if (num > 0) {
//     alert("positive number");
// }
// else if (num < 0) {
//     alert("negative number")
// }
// else if (num == 0) {
//     alert("zero");
// }

// Q4)

// let char = prompt("Enter any alphabet").toLowerCase();
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     alert(`True ${char} is a vowel`);
// }
// else {
//     alert(`False ${char} is not a vowel`);
// }

// Q5)

// let dbPassword = (12345);
// let userPassword = prompt("Enter your password");

// if (!userPassword) {
//     alert("Please enter your password")
// }
// else if (dbPassword == userPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else if (dbPassword != userPassword) {
//     alert("Incorrect password");
// }

// Q6) 

// var hour = +prompt("Enter any number :");
// if (hour < 18) {
//     alert("Good Morning");
// }
// else if (hour >= 18){
//     alert("Good Evening");
// }
// else {
//     alert("Please enter a number");
// }

// Q7)

// let time = +prompt("Enter time i.e in this format (eg:1900 = 7pm)");

// if (time >= 0 && time <1200) {
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night");
// }
// else {
//     alert("Please enter time in given format (eg:1900 = 7pm)");
// }