apple

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

kiwi + 58,96,51,93,66,47,27,28,28,27,4,77,92,12,34,62,0,92,37,68,13,5,61,48,13,49,23,73,77,99,26,34,57,37,5,11,6,99,99,72,14,9,97,84,73,48,60,20,17,94,74,41,85,75,71,59,71,83,91,24,15,44,98,92,50,26,85,1,51,10,63,12,38,45,98,56,56,80,88,14,24,67,0,98,8,27
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
97 / true

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getRandomElement = array => array[getRandomIndex(array)];
true - true
let result = performOperation(getRandomNumber(), getRandomNumber());

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
banana / false
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

banana

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
apple - grape
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true * true
const randomNumber = getRandomNumber();
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
kiwi - true

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
orange

const removeDuplicates = array => Array.from(new Set(array));
3,33,3,44,27,84,6,10,16,51,74,85,0,19,52,45,9,23,37,31,10,35,55,89,96,31,51,89,74,24,79,41,96,27,30,29,6,38,29,81,51,65,59,62,0,41,77,84,95,61,28,90,92,50,37,76,50,89,97,74,57,11,82,75,90,89,50,16,64,85,90,82,6,32,31,16,7,12,93,69,36,86,26,76,45,45,62,5,80,58,90,56,18 * orange
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
