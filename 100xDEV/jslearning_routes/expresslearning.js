
const express = require('express');
const users = [{
  name: "aryan",
  age: 25,
  gender: "male",
  kidneys: [
    {
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
// } < logic for square function >
//  this is a basic example of how to use the app.get method to handle a get request and response --↓
// app.get("/", function(req,res){
//     const n = req.query.n;
//     const value = square(n);
//     res.send(`The square of ${n} is ${value}`);
// })

// get router
app.get("/",  (req, res)=> {
  console.log("this is to get the no of kidneys" + " get router");
  const aryanKidneys1 = users[0].kidneys;
  const noOfKidneys = users[0].kidneys.length;
  let healthyKidney = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (aryanKidneys1[i].healthy) {
      healthyKidney += 1;
    }
  }
  const unhealthyKidney = noOfKidneys - healthyKidney

  res.json({
    noOfKidneys,
    healthyKidney,
    unhealthyKidney
  })
  // this was to check for the no of kidneys
  // the get uses query parameters
})
// end of get router

// post router
app.post("/", function (req, res) {
  console.log(req.body + " post router")
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy
  })
  res.json({
    msg: 'sone'
  })
  // post uses body parameters => thats why res.body
});
// end of post router

// put router
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "updated every kidney to healthy"
    // required for the put router as to tell postman that an activity has been perfomed
  })
})
// end of put router

// delete router
app.delete("/", function (req, res) {
  const newKidneysArray = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneysArray.push({
        healthy: true
      })
    }
    else {
      "no unhealthy kidneys to delete"
    }
  }
  users[0].kidneys = newKidneysArray;
  res.json({
    msg: "deleted all the unhealthy kidneys" + " delete  router"
  })
})
//

app.listen(3000);
