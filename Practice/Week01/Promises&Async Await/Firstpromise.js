//without promise

const fs = require('fs');

// my own asynchronous function
function AbhisReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

AbhisReadFile(onDone);


//using promise
const fs = require('fs');

// my own asynchronous function
function AbhisReadFile() {
    console.log("inside AbhisReadFile");
    return new Promise(function(resolve) {
        console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function(err, data) {
            console.log("before promise");  
            resolve(data);
        });
    });
}

// callback function to call
function onDone(data) {
    console.log(data);
}

// Call the correct function
AbhisReadFile().then(onDone);

//output
// inside AbhisReadFile
// inside promise
// before promise
// hi there from a.txt