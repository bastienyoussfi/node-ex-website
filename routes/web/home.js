var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.render("pages/");
})

router.get("/home", function(req, res){
    res.render("pages/home");
})

router.get("/about", function(req, res){
    res.render("pages/about");
})

router.get("/login", function(req, res){
    res.render("pages/login.ejs");
})

router.get("/signup", function(req, res){
    res.render("pages/signup.ejs");
})

module.exports = router;