// TypeScript Basics:
// ▶︎ Task 4
//TS isn't something I'm familiar with, but I learned about it at w3schools and learned its syntax. Since I have strong programming knowledge, I already know java, OOP and JS so I'm looking forward to learning more about it.
// TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.




// INSTALLING TSC
// After installing node.js , it's preferred to install TypeScript globally so :
// 1. open the terminal and write "npm install -g typescript"
// 2. write "tsc --init" which will create a file named tsconfig.json in my project 
// 3. write "tsc " which will create a Js file named product.js in my project 
// so this is the way transpilation TS to JS

interface Product {
  name: string ;
  price: number ;
}

function getTotalPrice(products: Product[]): number {
  // returns the total price of all products in the parameter array
  return products.reduce((total, product) => total + product.price, 0);
}

// Example usage:
// const products: Product[] = [
//   { name: 'Apple', price: 1.5 },
//   { name: 'Banana', price: 0.75 },
//   { name: 'Orange', price: 1.25 },
// ];

// console.log(getTotalPrice(products)) ; 
// Output: 3.5 

// ▶︎ Task 5

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if it matches then returns ture ,otherwise it will return false
  return emailRegex.test(email);
}

// Example usage:
// console.log(isValidEmail('iamybatish@gmail.com')); 
// Output: true
// console.log(isValidEmail('invalid.email')); 
// Output: false since it misses @... syntax
