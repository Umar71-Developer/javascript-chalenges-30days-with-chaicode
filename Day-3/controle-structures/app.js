/*Activity-1 IfElse Statements */
// Task-1 =============================================================================================================================
//write a program to check a number is positive, negative or zero , and log the result to the console.
//solution Task-1
// var num = -1;

// if (num < 0) {
//     console.log('The number is negative')
// } else if (num > 0){
//     console.log('The number is positve');
// }else{
//     console.log('The number is zero');
// }
//Task-2 ===================================================================================================================
//Write a program to check if a person is eligible to vote(age >= 18) and log the result to the console.
//solution Task-2 
// let age = 10;

// if(age >= 18){
//     console.log('The person is eligible to vote ');
// } else{
//     console.log('The person is not eligible to vote');
// }

//Activity-2 Nested if else statement
//Task-3 ============================================================================================================================
//Write a program to find the largest of three numbers using if-else stataments.
// let num1 = 14;
// let num2 = 20;
// let num3 = 30;
// let largest;
// if(num1 > num2){
//     if(num1 > num3){
//         largest = num1;
//     }else{
//         largest = num3;
//     }
// }else{
//     if(num2 > num3){
//         largest = num2;
//     }else{
//         largest = num3
//     }
// }

// if (num1 >= num2) {
//     if (num1 >= num3) {
//         largest = num1;
//     } else {
//         largest = num3;
//     }
// } else {
//     if (num2 >= num3) {
//         largest = num2;
//     } else {
//         largest = num3;
//     }
// }

// console.log(`The largest number is ${largest}`);


//Activity-3 Switch-case
//Task-4 ====================================================================================================================================
//Write a program that uses a switch case to determine the day of the week based on the number(1-7) and log the the day name on the console.
//solution Task-4
// Input number
// let dayNumber = parseInt(prompt("Enter a number (1-7): "));

// // Determine the day of the week using switch case
// let dayName;

// switch (dayNumber) {
//     case 1:
//         dayName = "Sunday";
//         break;
//     case 2:
//         dayName = "Monday";
//         break;
//     case 3:
//         dayName = "Tuesday";
//         break;
//     case 4:
//         dayName = "Wednesday";
//         break;
//     case 5:
//         dayName = "Thursday";
//         break;
//     case 6:
//         dayName = "Friday";
//         break;
//     case 7:
//         dayName = "Saturday";
//         break;
//     default:
//         dayName = "Invalid input! Please enter a number between 1 and 7.";
// }

// // Print the result
// console.log(dayName);

//Task-5 ======================================================================================================================================

// Write a program witch uses switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.
//Solution



// Input score
// let score = parseInt(prompt("Enter the score (0-100): "));

// // Determine the grade using switch case
// let grade;

// switch (true) {
//     case (score >= 90 && score <= 100):
//         grade = 'A';
//         break;
//     case (score >= 80 && score < 90):
//         grade = 'B';
//         break;
//     case (score >= 70 && score < 80):
//         grade = 'C';
//         break;
//     case (score >= 60 && score < 70):
//         grade = 'D';
//         break;
//     case (score >= 0 && score < 60):
//         grade = 'F';
//         break;
//     default:
//         grade = "Invalid score! Please enter a score between 0 and 100.";
// }

// // Print the result
// console.log(`The grade is ${grade}`);

//Activity-4 Conditional(Ternary) Operator
//Task-6
//Write a program that uses a Ternary operator to check if a number is even or odd and log the result to the console.
//solution
// Input number
// let number = parseInt(prompt("Enter a number: "));

// // Determine if the number is even or odd using a ternary operator
// let result = (number % 2 === 0) ? "Even" : "Odd";

// // Print the result
// console.log(`The number is ${result}`);

//Activity-5 Combining Conditions
//Task-7
//Write a program to check if a years is leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
//Solution

// Input year
let year = parseInt(prompt("Enter a year: "));

// Determine if the year is a leap year using multiple conditions
let isLeapYear;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}

// Print the result
console.log(`${year} is ${isLeapYear ? '' : 'not '}a leap year.`);
