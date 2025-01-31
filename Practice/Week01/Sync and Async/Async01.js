function findSum(n) {
    // This function calculates the sum of numbers from 0 to n-1.
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum; // The result is returned synchronously.
}

function findSumTill100() {
    // This function calls findSum with 100 and logs the result.
    console.log(findSum(100));
}

// Busy waiting example: This synchronous function simulates a delay.
function syncSleep() {
    let a = 1;
    for (let i = 0; i < 10000; i++) {
        a++;
    }
    // The loop blocks the event loop, delaying further execution of code.
}

// Synchronous execution
syncSleep(); // Executes first, blocks the execution until it completes.
findSumTill100(); // Executes after syncSleep finishes.

// Uncomment this line to see asynchronous behavior:
// setTimeout(findSumTill100, 1000);

// Prints "hello world" immediately after the previous synchronous calls.
console.log("hello world");

/*
OUTPUT with the current synchronous setup:
-------------------------------------------------
1. syncSleep() runs first and blocks the code until the loop completes.
2. findSumTill100() executes next, and the sum (4950) is printed.
3. "hello world" is printed last.

Control Flow:
syncSleep -> findSumTill100 -> console.log("hello world")

Output:
4950
hello world

-------------------------------------------------
OUTPUT with asynchronous behavior (uncomment setTimeout):
-------------------------------------------------
1. syncSleep() runs first and blocks the code until the loop completes.
2. "hello world" is printed immediately after syncSleep.
3. The callback for setTimeout executes 1 second later, printing the sum (4950).

Control Flow:
syncSleep -> console.log("hello world") -> (after 1 second) findSumTill100

Output:
hello world
4950
*/
