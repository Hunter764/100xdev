 //Write another function that displays this result in a pretty format 

 function sum(a,b){
    const sumValue = a+b
    return `The sum of the digit is: ${sumValue}` 
 }

// Function to display the result in a pretty format
 function prettyformat(value) {
    console.log("**************")
    console.log("*   Result   *")
    console.log("**************")
    console.log(value)
    console.log("**************")
 }

 // Function to print the sum in passive tense
function passivetense(sumMessages){
    const passiveMessage = sumMessages.replace("is:","is calculated as: ")
    console.log(passiveMessage)
    console.log("*****************")
}

 const value = sum(23,7)
 prettyformat(value)
 passivetense(value)

// **************
// *   Result   *
// **************
// The sum of the digit is: 30
// **************
// The sum of the digit is calculated as:  30
// *****************