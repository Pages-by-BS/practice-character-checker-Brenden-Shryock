const readline = require('readline-sync');
let phrase = readline.question("Enter a word or phrase: ");
let index = readline.question("Enter an index number: ");
index = Number(index);
console.log("The character at index " + index + " is '" + phrase[index] + "'");
