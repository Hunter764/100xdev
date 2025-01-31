// --> simple function

// function calculateArithmetic(a,b,type){
//     if(type == "sum"){
//         return a+b;
//     }
//     if(type == 'minus'){
//         return a-b;
//     }
// }

// const value = calculateArithmetic(1,2,"minus");
// console.log(value);


//output -1


// --> Calling functions

function calculateArithmetic(a,b,type){
    if(type =="sum"){
        const value = sum(a,b);
        return value;
    }
    if(type == "minus"){
        const value = sub(a,b);
        return value;
    }
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const value = calculateArithmetic(1,2,"minus");
console.log(value);



//output -1
