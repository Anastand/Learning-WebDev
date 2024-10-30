
const express = require('express');
const users =[{
    name: "aryan",
    age: 25,
    gender: "male",
    kidneys:[{
        healthy: true
    },
    {
        healthy: false
    }],
}]


const app = express();

app.use(express.json());

// function square(n){
//     return n*n;
// } <logic for square function>
//  this is a basic example of how to use the app.get method to handle a get request and response --↓
// app.get("/", function(req,res){
//     const n = req.query.n;
//     const value = square(n);
//     res.send(`The square of ${n} is ${value}`);
// })

app.get("/", function(req,res){
    console.log("this is to get the no of kidneys");
    const aryanKidneys1 = users[0].kidneys;
    const noOfKidneys = users[0].kidneys.length;
    let healthyKidney=0;
    for (let i = 0;i<noOfKidneys;i++ ){
        if (aryanKidneys1[i].healthy) {
            healthyKidney +=1;
        }
    }
    const unhealthyKidney = noOfKidneys-healthyKidney

    res.json({
        noOfKidneys,
        healthyKidney,
        unhealthyKidney
    })
    // this was to check for the no of kidneys
    // the get uses query parameters
})

app.post("/", function(req,res){
    const ishealthy=res.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    req.json({
        msg:'sone'
    })
    // post uses body parameters => thats why res.body
});
app.listen(3000);

