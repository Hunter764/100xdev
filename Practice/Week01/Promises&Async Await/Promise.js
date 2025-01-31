// Promises in JavaScript typically have 3 states: 
// 1. Pending
// 2. Resolved
// 3. Rejected

// -> Snippet 1: Creating a promise that is in "pending" state
//let p = new Promise(function(resolve) {
    // No resolve or reject here, so it remains pending
 // });
  console.log(p); 
  // Output: Promise { <pending> }
  
  
  // -> Snippet 2: Simple promise that immediately resolves
  let p = new Promise(function(resolve) {
    resolve("hi there"); // This resolves the promise with "hi there"
  });
  
  // Using .then() to handle the resolved promise
  p.then(function() {
    console.log(p); 
  });
  // Output: Promise { 'hi there' }
  
  
  // -> Snippet 3: Dummy async function that almost immediately resolves
  function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      resolve("hi there"); // Immediately resolves the promise with "hi there"
    });
    return p;
  }
  
  // Calling the async function and handling its resolved value
  const value = kiratsAsyncFunction();
  value.then(function(data) {
    console.log(data); 
  });
  // Output: "hi there"
  