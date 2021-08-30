var express = require('express');
var router = express.Router();
var USER = require('../model/user-model');

router.get('/', function (req,res, next) {
    USER.find(function (err,response) {
        if(err)
            res.send(err);
        res.json(response);
    })
});

router.post('/', function (req,res) {
    USER.create(req.body, function (err,response) {
        if(err)
            res.send(err);
        res.json(response);
    })
});

router.delete('/:id', function (req,res) {
    USER.findOneAndRemove({_id:req.params.id},function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    })
});
router.get('/:id', function (req,res) {

    USER.findOne({_id:req.params.id},function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    })
});
router.put('/:id', function (req,res) {
    var query ={
        name:req.body.name,
        description:req.body.description,
        date_visited:req.body.date_visited,
    }
    USER.findOneAndUpdate({_id:req.params.id},query,function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    })
});

module.exports = router;