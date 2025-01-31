const fs  = require("fs");

//filesystem module ->its a  nodejs library to read and write a file

fs.readFile("a.txt", "utf-8",function(err,data){
    console.log(data);
})

console.log("hi there")
let a =0;

//takes very longer than the file reads
for(let i=0 ;i<10000000000;i++){
    a++;
}
console.log("hi there 2")


// hi there from  a.txt  ->reading  data from a text  file


// hi there
// hi there 2
// hi there from  a.txt


/*
// Filesystem module -> Node.js library to read and write files
const fs = require("fs");

// Asynchronous file read operation
fs.readFile("a.txt", "utf-8", function (err, data) {
    // This callback is executed when the file is read successfully or if an error occurs.
    if (err) {
        console.error("Error reading the file:", err); // Logs any error that occurs during file reading.
        return;
    }
    console.log(data); // Logs the content of 'a.txt' after the file read is complete.
});

console.log("hi there"); 
// This executes immediately because fs.readFile is asynchronous and does not block the program.

let a = 0;

// A CPU-intensive operation (busy waiting)
// This loop takes a significant amount of time to complete.
for (let i = 0; i < 10000000000; i++) {
    a++;
}

console.log("hi there 2"); 
// This executes after the loop finishes, delaying any other tasks, such as the fs.readFile callback.

// Expected Output (Assuming 'a.txt' contains "hi there from a.txt"):
/*
1. The `fs.readFile` function starts reading the file asynchronously.
2. "hi there" is printed immediately because `console.log("hi there")` is synchronous.
3. The for-loop runs next, consuming significant CPU time and delaying other tasks (including the file read callback).
4. After the loop finishes, "hi there 2" is printed.
5. Finally, when the file read is complete and the event loop gets to it, the content of the file ("hi there from a.txt") is logged.

Control Flow:
1. fs.readFile begins (asynchronous task starts).
2. console.log("hi there") executes.
3. The for-loop runs, blocking further execution.
4. console.log("hi there 2") executes after the loop.
5. fs.readFile callback executes (logs the file content).

Output:
hi there
hi there 2
hi there from a.txt
*/

// Key Takeaways:
// 1. fs.readFile is asynchronous, meaning it initiates a file read and the callback is executed later.
// 2. The long-running for-loop blocks the event loop, delaying the execution of the file read callback.
// 3. This code highlights how synchronous operations (like the for-loop) can block asynchronous callbacks, reducing responsiveness.

