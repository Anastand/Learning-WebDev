// learning in class
const express = require("express");
const app = express();
app.use(express.json());

function ageVerificationMiddleware(req, res, next) {
  const agecheck = req.query.agecheck;
  if (agecheck >= 18) {
    next();
  }
  else {
    res.status(404).json({
      Error: "you have error ==> Age Restriction",
      msg: "must of the age above of 18",
    })
  }
}

app.get("/first", ageVerificationMiddleware, (req, res) => {
  res.json({
    msg: "you have reached the first park ==> 1 "
  })
})
app.get("/second", ageVerificationMiddleware, (req, res) => {
  res.json({
    msg: "you have reached the second park ==> 2 "
  })
})
app.get("/third", ageVerificationMiddleware, (req, res) => {
  res.json({
    msg: "you have reached the third park ==> 3 "
  })
})

app.listen(3000);
