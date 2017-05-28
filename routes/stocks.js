var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/covertdb', ['stocks']);

module.exports = router;

//Get all stocks
router.get('/stocks', function(req, res, next){
    db.stocks.find(function(err, stocks){
        if(err){
            res.send(err);
        }else {
            res.json(stocks);
        }
    });
});

//Get single stock
router.get('/stocks/:id', function(req, res, next){
    db.stocks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, stock){
        if(err){
            res.send(err);
        }else {
            res.json(stock);
        }
    });
});

//save stock
router.post('/stock', function(req, res, next){
    var stock = req.body;
    if (!stock.title || !(stock.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.stocks.save(stock, function(err, stock){
            if (err){
                res.send(err);
            }
            res.json(stock);
        })
    }
})

//delete stock
router.delete('/stock/:id', function(req, res, next){
    db.stocks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, stock){
        if(err){
            res.send(err);
        }else {
            res.json(stock);
        }
    });
});

//update stock
router.put('/stock/:id', function(req, res, next){
    var stock = req.body;
    var updStock = {};

    if (stock.isActive){
        updStock.isActive = stock.isActive
    }
    if (stock.title){
        updStock.title = stock.title;
    }
    if (!updStock){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.stocks.update({_id: mongojs.ObjectId(req.params.id)}, updStock, {}, function(err, stock){
            if(err){
                res.send(err);
            } else {
                res.json(stock);
            }
        });
    }
});
