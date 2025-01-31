// This code demonstrates the use of callback functions in JavaScript.

// Outer function: `calculateArithmetic`
// This function takes three parameters:
// - `a`: the first number.
// - `b`: the second number.
// - `arithmeticFinalFunction`: a callback function that defines the arithmetic operation to be performed on `a` and `b`.
function calculateArithmetic(a, b, arithmeticFinalFunction) {
    // The callback function is invoked with `a` and `b` as arguments.
    const ans = arithmeticFinalFunction(a, b);
    // The result of the callback function is returned.
    return ans;
}

// Callback function: `sum`
// This function takes two arguments, `a` and `b`, and returns their sum.
function sum(a, b) {
    return a + b;
}

// Using the `calculateArithmetic` function:
// - Passing `1` and `2` as the values for `a` and `b`.
// - Passing `sum` as the callback function (`arithmeticFinalFunction`).
const value = calculateArithmetic(1, 2, sum);

// The result of the operation (sum of 1 and 2) is stored in `value`.
// Printing the result to the console.
console.log(value); // Output: 3

// Advantages of using this pattern:
// 1. Reusability: `calculateArithmetic` can handle different arithmetic operations by passing different callback functions.
// 2. Flexibility: The code is more modular and easier to extend.
// 3. Separation of Concerns: `calculateArithmetic` focuses only on invoking the operation, while the specific logic is handled by the callback function.

// Extended example to demonstrate flexibility with additional operations:

// Callback function: `subtract`
// This function takes two arguments, `a` and `b`, and returns their difference.
function subtract(a, b) {
    return a - b;
}

// Callback function: `multiply`
// This function takes two arguments, `a` and `b`, and returns their product.
function multiply(a, b) {
    return a * b;
}

// Using `calculateArithmetic` with the `subtract` callback function.
console.log(calculateArithmetic(5, 3, subtract)); // Output: 2

// Using `calculateArithmetic` with the `multiply` callback function.
console.log(calculateArithmetic(5, 3, multiply)); // Output: 15

// This demonstrates the power and flexibility of using callback functions in JavaScript.
