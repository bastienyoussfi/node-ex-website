var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    //console.log("Hello I'm on the main page here");
    res.render("pages/index");
})

router.get("/home", function(req, res){
    res.render("pages/home");
})

module.exports = router;