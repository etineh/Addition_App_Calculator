// jshint esversion

const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){
    
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    let result = no1 + no2
    
    res.send("Your answer is "+result);
})

app.get("/bmical", function(req, res){
    res.sendFile(__dirname + "/bmi_calculator.html");
});

app.post("/bmical", function(req, res){
    let wei = parseFloat(req.body.weight);
    let hei = parseFloat(req.body.height);
    let ans = wei / Math.pow(hei, 2);
    res.send("your BMI is" + ans);

})

app.listen(3000, function(){
    console.log("Server on port 3000");
});
