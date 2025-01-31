function findSum(n){
    let ans =0;
    for(let i=0; i<n;i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
    return findSum(100);
}

setTimeout(findSumTill100,1000)
console.log("hello world");

/*
Code Flow Explanation:
Function Definitions:

The findSum(n) function is defined. It calculates the sum of integers from 0 to n-1 by iterating through a loop and adding each value to ans. Finally, it returns the result.
The findSumTill100() function is defined. It calls findSum(100) and returns the result.
Asynchronous Call (setTimeout):

The setTimeout(findSumTill100, 1000) schedules the execution of the findSumTill100() function after a delay of 1 second (1000 ms). The actual execution of this function is deferred and handled by the JavaScript event loop.
Synchronous Execution:

The console.log("hello world") statement executes immediately since it's a synchronous operation. This outputs hello world to the console.
Asynchronous Execution (After 1 second):

After the delay of 1 second (measured by the browser or Node.js environment), the callback function (findSumTill100) passed to setTimeout is executed.
The findSumTill100() function calls findSum(100) to compute the sum of integers from 0 to 99.
The result of findSum(100) is computed, but the result is not logged or used anywhere, so it has no visible effect.
Execution Sequence:
hello world is printed to the console immediately.
After a 1-second delay, findSumTill100() is executed, but its result is not visible or utilized.
Output:

hello world

Key Points:
The setTimeout call does not block the main thread; it schedules the callback for later execution.
Any operations within findSumTill100 after the delay are effectively "invisible" unless explicitly logged or returned in a meaningful way.






*/

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    return findSum(100);
}

setTimeout(() => {
    const result = findSumTill100(); // Call the function
    console.log("Sum till 100:", result); // Log the result
}, 1000);

console.log("hello world");
