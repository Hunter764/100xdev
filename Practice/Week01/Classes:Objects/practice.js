
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function SumofSquares(a,b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2; //5
}

function SumofCubes(a,b){
    const val1 = cube(a);
    const val2 = cube(b);

    return val1 + val2;
}

let ans = SumofSquares(1,2);
console.log(ans);//52
console.log(SumofCubes(1,2)); //9