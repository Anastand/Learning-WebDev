
const express = require('express');

function square(n){
    return n*n;
}


const app = express();

app.get("/", function(req,res){
    const n = req.query.n;
    const value = square(n);
    res.send(`The square of ${n} is ${value}`);
})

app.listen(3000);


