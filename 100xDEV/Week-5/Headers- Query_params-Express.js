l// basic http server
const express = require("express");
const app = express();

app.get("/add/:a/:b", (req, res) => {
  // code for add
  const a = req.params.a;
  const b = req.params.b;
  const sum = Number(a) + Number(b);
  res.json({
    msg: `the sum is ${sum}`
  })
})
app.get("/divide/:a/:b", (req, res) => {
  // code for divide
  const a = req.params.a;
  const b = req.params.b;
  const divide = Number(a) / Number(b);
  res.json({
    msg: `the divide is ${divide}`
  })
})
app.get("/multiply/:a/:b", (req, res) => {
  // code for multiply
  const a = req.params.a;
  const b = req.params.b;
  const mul = Number(a) * Number(b);
  res.json({
    msg: `the multiply is ${mul}`
  })
})
app.get("/sub/:a/:b", (req, res) => {
  // code for subtract
  const a = req.params.a;
  const b = req.params.b;
  const sub = Number(a) - Number(b);
  res.json({
    msg: `the sub is ${sub}`
  })
})

app.listen(3000)
