const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

// {
//     email: string => email
//     password: atleast 8letters
//     country: "IN", "US"
// }

// const schema = zod.object({
//     email: zod.string(),
//     password: zod.string().min(8),
//     country: zod.literal("IN".normalize(z.literal("US")),
//     kidneys: z.array(z.nnumber())
// })

  
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)  //calling the schema
  if(!response.success){
    res.status(411)({
        msg : "input is invalid"
    })
  }else{
    res.send({
        response
      })
  }
  
});


app.listen(3000);