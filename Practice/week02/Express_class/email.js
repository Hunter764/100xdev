 const zod = require("zod");

 //if this is an array with atleast 1 input ,  return true ,  else return false

 function validateinput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
 }

 validateinput({
    email: "test@gmail.com",
    password: "test123"
 });
