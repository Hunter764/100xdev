//creating an http server
//express
//node defult library => no

const express = require("express")

//2 line you always require or you creating your hospital
 
const app = express();

function sum(n){
    let ans =0;
    for(let i=0;i<n;i++){
        ans = ans + i;
    }
    return ans;
}

app.get("/",function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi your answer is " + ans);
})

app.listen(3000);
