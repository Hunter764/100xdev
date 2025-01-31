const express = require("express")
const app = express();
var users =[{
    name:"John",
    kidneys:[{
        healthy:false,
    },{
        healthy:true,
    }]
}]


app.use(express.json());

//query parameter for post(to send input)
app.get("/",function(req,res){    //how many kidneys does John have and how many of them are healthy
    
    const johnKidneys = users[0].kidneys;  //looking for 1st user 
    const numberofKidneys = johnKidneys .length; //number of kidneys john have
    let numberofhealthykidneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberofhealthykidneys += 1;
        }
    }
    const unhealthykidneys = numberofKidneys - numberofhealthykidneys;

    res.json({
        numberofKidneys,
        numberofhealthykidneys,
        unhealthykidneys
    })

})

//in post you can directly send data through body or the other way is postman

// POST route to add a kidney
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy; // Read `isHealthy` from request body
    if (isHealthy === undefined) {
        return res.status(400).json({ error: "isHealthy is required in the request body." });
    }

    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Kidney added successfully!",
        kidneys: users[0].kidneys
    });
});


app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg: "All kidneys have been updated to healthy!",
        updatedKidneys: users[0].kidneys
    });
});


//removing all the unhealthy kidneys

app.delete("/",function(req,res){
    //edge case
    //you should return 411
    //only if atleast one unhealthy kidney is present do this,elese return 411

   if(isThereAtleastOneUnhealthykidney){
    const newkidneys = [];
    for(let i=0 ; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({msg:"done"})
   }
   else{
    res.sendStatus(411).json({
        msg: "You have no bad kidneys"
    })
   }

    
})

function isThereAtleastOneUnhealthykidney(){
    let atleastOneUnhealthykidney = false;
    for(let i=0 ; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthykidney = true;
        }
    }
    return atleastOneUnhealthykidney
}

app.listen(3000);