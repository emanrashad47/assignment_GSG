"use strict";
// TypeScript Basics:
// ▶︎ Task 4
//TS isn't something I'm familiar with, but I learned about it at w3schools and learned its syntax. Since I have strong programming knowledge, I already know java, OOP and JS so I'm looking forward to learning more about it.
// TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
function getTotalPrice(products) {
    // returns the total price of all products in the parameter array
    return products.reduce((total, product) => total + product.price, 0);
}
// Example usage:
// const products = [
//     { name: 'Apple', price: 1.5 },
//     { name: 'Banana', price: 0.75 },
//     { name: 'Orange', price: 1.25 },
// ];
// console.log(getTotalPrice(products));
// Output: 3.5 
// ▶︎ Task 5
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if it matches then returns ture ,otherwise it will return false
    return emailRegex.test(email);
}
// Example usage:
// console.log(isValidEmail('iamybatish@gmail.com')); 
// Output: true
// console.log(isValidEmail('invalid.email')); 
// Output: false since it misses @... syntax
