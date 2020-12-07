//Includes.js
//
//Ger tillbaks true eller false beroende på om arrayen har värdet som söks.
// alla värden måste finnas.

const names = ['Johan,Karl,Magnus']

console.log(names.includes('Johan,Karl,Magnus')) // true

console.log(names.includes('Johan')) // false
console.log(names.includes('Karl')) // false
console.log(names.includes('Magnus')) // false