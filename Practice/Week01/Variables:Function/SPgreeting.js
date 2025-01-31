// Write the program to greet a person given their first and last name 

//code 1

// let firstName = "Abhyudaya"
// let secondName = "Mohan"
// let greeting =`Hello, ${firstName} ${secondName}!`
// console.log(greeting)

// Hello, Abhyudaya Mohan!
/*1. Backticks (`)
Backticks are used to create a template literal instead of using single (') or double (") quotes.
Template literals allow for multi-line strings and string interpolation, making them more flexible than regular strings.
2. ${} (Expression Interpolation)
Inside a template literal, ${} is used to embed JavaScript expressions (such as variables, operations, or function calls) directly within the string.
The expression inside ${} is evaluated, and its result is placed into the string at that location.*/


//Approach 2 function

function greet(firstName,lastName){
    return`Hello, ${firstName} ${lastName}!`;
}
let firstName = "Abhyudaya"
let lastName = "Mohan"
console.log(greet(firstName,lastName))  //Hello, Abhyudaya Mohan!