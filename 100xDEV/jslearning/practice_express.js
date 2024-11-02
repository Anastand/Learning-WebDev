// task for me to do
// [✅] 1. create a express server
// [✅] 2. create a route for '/'
// [✅] 3. create a object with a property => name , age , gender , kidneys
// [✅] 4. get the info and put it in the get route
// [✅] 5. add kidney to the object with postman => setup a post req.
// [✅] 6. add a delete route to remove unhealthy kidney.
// [✅] 7. complete the assignment.

// Start
const express = require('express');
const users = [{
  // here we will use ',' for adding more objects
  name: "aryan",
  age: "23",
  // how will i add age here in the object
  kidneys: [
    {
      healthy: true
    },
    {
      unhealthy: true
    },
    {
      unhealthy: true
    }],
}];
const app = express();

app.use(express.json());

// get router
app.get("/get", function (req, res) {
  let unhealthykidneycount = 0;
  let healthykidneycount = 0;
  const aryankidney = users[0].kidneys;
  const aryanhealthykidney = users[0].kidneys.healthy;
  const noOfAryanKidneys = users[0].kidneys.length;

  // 1. [✅] get the lis of all the users kidey in json format.
  for (let i = 0; i < noOfAryanKidneys; i++) {
    if (aryankidney[i].healthy) {
      // how to push to object with array
      healthykidneycount += 1
    }
  }
  unhealthykidneycount = noOfAryanKidneys - healthykidneycount;
  // issue
  //  1. how to use res and req here .
  //sol =>  res.send("helo world for practice")
  //  2. i don't know how to print the data in josnformat
  // sol =>
  res.json({
    noOfAryanKidneys,
    healthykidneycount,
    unhealthykidneycount,
  })
})
// done with get router

// post request

app.post("/post", (req, res) => {
  console.log("post router here , adding new kidney")
  const addingkidneytouser = req.body.addingkidneytouser;
  users[0].kidneys.push({ healthy: addingkidneytouser });

  res.json({
    msg: "done",
  })
  // end of post router
})

// put router
app.put("/put", (req, res) => {
  console.log("using put router to make every kidney to be healthy")
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "made all the kidney to be healthy"
  })
})
// end of put router

// delete router
app.delete("/del", (req, res) => {
  const newarrayforkidney = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == true) {
      newarrayforkidney.push({
        healthy: true
      })
    }
    else { "no unhealthy kidney to delete" }
  }
  users[0].kidneys = newarrayforkidney;
  res.json({
    msg: "deleted all the unhealthy kidney"
  })
})
// end of delete router


app.listen(3000)
