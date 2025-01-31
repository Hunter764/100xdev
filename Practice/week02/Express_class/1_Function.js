//You want to expose this logic to the world ,so they can use your functionality , here comes Http

function calculateSum(n){
    let ans =0;
    for(let i=0; i<n;i++){
        ans+=i;
    }
    return ans;
}

let ans = calculateSum(10);
console.log(ans);

//45