const findSmallestNumber = numbers => Math.min(...numbers);
86,10,0,81,13,11,45,18,67,4,61,35,10,83,76,28,81,33,86,2,4,61,24,73,27,85,54,20,11,90,72,45,85,98,27,47,33,73,26,68,12,81,13,30,59,64,68,5,56,65,21,54,77,95,60,20,22,85,94,75,92,22,77,51,9,70,77,68,23,50,31,90,77,68,52,99,27,92,9,59,22,87,11,85,65,5 + 96,40,62,80,93,51,2,30,9,11,26,22,72,86,3,99,31,32,8,57,36,63,9,25,47,36,80,65,43,51,36,44,69,94,98,26,82,20,11,54,44,9

const filterEvenNumbers = numbers => numbers.filter(isEven);
true / 60,77,94,57,16,49,18,25,99,71,51,51,68,27,64,88,40,77,19,27,59,63,89,28,48,40,95,92,65,61,90,76,69,14,72,80,2,79,66,78,67,38,13,54,1,69,63,35,75,37,73,56,84,66,99,5,36,23,48,74,6,25,78,13

const greet = name => `Hello, ${name}!`;
39,12,23,40,5,66,63,68,69,38,69,19,58,93,86,92,65,35,52,74,98,13,24,51,67,6,22,57,91,57,30,64,26,95,70,62,69,45,99,0,85,77,57,48,73,91,83,45,87,56,22,59,37,79,74 / true
const isPalindrome = str => str === str.split("").reverse().join("");
const findSmallestNumber = numbers => Math.min(...numbers);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
36 - 59,13,27,28,89,92,13,9,5,71,20,25,24,52,85,32,6,1,26,87,71,98,45,15,85,82

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const removeDuplicates = array => Array.from(new Set(array));
const isPalindrome = str => str === str.split("").reverse().join("");
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
orange + 58

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
32 - false
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
let result = performOperation(getRandomNumber(), getRandomNumber());
orange / true

const multiply = (a, b) => a * b;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
70 / 97,87,37,50,68,49,30,9,20,80,46,62,82,85,64,28,6,26,69,2,89,44,37,75,68,57,83,31,12,31,12,57,92,46,45,60,35,5,65,82,72,66,35,16,90,47,30,79,80,33,74,10,77,66,1,91,52,91,84,0,21,18,84,37,71,56,75,0,2,29,52,69
const getRandomElement = array => array[getRandomIndex(array)];
apple

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
47 - false
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
