/* 
   Filename: complexCode.js
   Description: A complex JavaScript code showcasing advanced programming concepts and solving a realistic problem.
   Author: [Your Name]
   Date: [Current Date]
*/

// Import required Node.js modules
const fs = require('fs');
const axios = require('axios');
const readline = require('readline');

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to generate random numbers between a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate the sum of all prime numbers up to a given number
function sumOfPrimes(limit) {
  let sum = 0;
  for (let num = 2; num <= limit; num++) {
    let flag = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      sum += num;
    }
  }
  return sum;
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  getMagnitude() {
    return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
  }

  getConjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  // More complex operations can be added here...
}

// Asynchronous function to fetch data from an API
async function fetchDataFromAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return null;
  }
}

// Function to read a file line by line and perform custom operations
function processFile(filename) {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false
  });

  readInterface.on('line', (line) => {
    // Custom operations for each line of the file
    console.log(`Processing line: ${line}`);
    // ...
  });

  readInterface.on('close', () => {
    console.log('File processing completed.');
  });
}

// Usage of the above functions and classes
const randomNum = generateRandomNumber(1, 100);
console.log(`Random Number: ${randomNum}`);

const fact = factorial(5);
console.log(`Factorial: ${fact}`);

const sumPrime = sumOfPrimes(100);
console.log(`Sum of Primes: ${sumPrime}`);

const num1 = new ComplexNumber(3, 4);
console.log(`Magnitude of num1: ${num1.getMagnitude()}`);
console.log(`Conjugate of num1: ${num1.getConjugate().real} + ${num1.getConjugate().imaginary}i`);

const apiUrl = 'https://api.example.com/data';
fetchDataFromAPI(apiUrl)
  .then((data) => {
    if (data) {
      console.log(`Data fetched from API: ${data}`);
    }
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });

const filename = 'data.txt';
processFile(filename);

// More advanced and complex code can be added...
// ...
// ...