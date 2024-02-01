const express = require("express");
const router = express.Router();
const { authRequired, adminRequired } = require("../services/auth.js");

// GET /
router.get("/", authRequired, function (req, res, next) {
    res.render("competitions/index");
});

// GET /competitions/add
router.get("/add", adminRequired, function (req, res, next) {
    res.render("competitions/add", { result: { display_form: true } });
});

// GET /competitions/add
router.get("/add", adminRequired, function (req, res, next) {


    
    res.render("competitions/add", { result: { display_form: true } });
});


module.exports = router;
