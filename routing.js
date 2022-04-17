const express = require("express");
const router = express.Router();
//const Database = require("./utils/DB_service")
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/home', function(req, res){
    res.render('home')
})

router.get('/stats', async function (req, res) {
    //let count = await Database.getAnswerCount
    //console.log(Promise.resolve(count))
    //const viewData = {
    //    opinions: count,
    //  };
    res.render('stats', viewData);
});


router.get('/', function (req, res) {
    res.render('formula',);
});

router.post('/sendForm',urlencodedParser , function(req, res){
    console.log(req.body)
    //Database.submitPoll(req.body)
    res.render("success")
})

router.get('/Impressum', function (req, res) {
    res.render('impressum',);
});

module.exports = router;