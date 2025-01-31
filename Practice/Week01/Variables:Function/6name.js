//Write a program that prints all the male people's first name given a complex object

//-> Approach 1
// const personArray = ["Abhi", "Aman", "Priya"] //Syntax of arrays
// const genderArray = ["Male", "Male", "Female"] //Array of Strings

// const numberOfUsers = personArray.length;
// for(let i=0; i<numberOfUsers; i++){
//     if(genderArray[i] === "Male"){
//         console.log(personArray[i])   //Abhi Aman
//     }
// }

//We combine values in Javascript using something called Objects
//Objects  are a way to aggregate data together  simimlar to arrays

//Approach->2 

//Objects
//Array of objects:- every feild of objects is array in itself

const alUsers = [{
    firstName: "Abhyudaya",
    gender:"Male"
},{
    firstName: "Aman",
    gender:"Male",
    metadata: {
        age: 21,
        adress:""
    }
},{
    firstName:"Priya",
    gender:"Female"
}]

for(let i=0; i<alUsers.length; i++){
    if(alUsers[i]["gender"] == "Male"){ //imp to understand
        console.log(alUsers[i]["firstName"])
    }
}

//can also create arrays of objects
//Arrays don't necessarily have to be of just strings and numbers
//output:-Abhyudaya Aman