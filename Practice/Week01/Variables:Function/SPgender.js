// Write a program that greets a person based on their gender. (If else) 

const personArray = ["Abhyudaya","Aman", "Priya"];
const genderArray = ["Male", "Male", "Female"];

const numberOfUsers = personArray.length

for(let i=0; i<numberOfUsers;i++){
    if(genderArray[i] == "Male"){
        console.log("Good Morning Mr.", personArray[i])
    }
    else{
        console.log("Good Morning Ms.",personArray[i])
    }
}


// Good Morning Mr. Abhyudaya
// Good Morning Mr. Aman
// Good Morning Ms. Priya