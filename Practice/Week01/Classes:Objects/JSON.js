// JSON :- Javascript Object Notation


// const users = '{"name" : "Abhyudaya" , "age": 24, "gender":"male"}'  //this is a string 

//     //JSON.parse
//     //JSON.stringify

// const user = JSON.parse(users)     //Take the users string and convert it into a JSON object
// console.log(user["name"])


// output: Abhyudaya


//JSON.stringify

const user = {
    name: "Abhyudaya",
    gender: "male"
}

const finalString = JSON.stringify(user)
console.log(finalString)


//getting output in string format:- {"name":"Abhyudaya","gender":"male"}


/*
JSON.stringify is used to convert JavaScript objects into JSON strings, 
such as when sending data to a server or saving objects in localStorage. 
JSON.parse is used to convert JSON strings back into JavaScript objects, 
like when receiving server responses or retrieving data from localStorage.
 */