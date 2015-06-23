var express = require('express'),
    app = express(),
    mongojs = require('mongojs'),
    db = mongojs('ecommerce', ['products'])
    cors = require('cors'),
    port = 8081,
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.route('/')
    .get(function(req, res) {
        db.products.find(req.query, function(err, resp) {
            if(err) {
                res.status(500).json(err);
            }
            else {
                res.json(resp);
            }
        })
    })
    .post(function(req, res) {
        db.products.save(req.body, function(err, resp) {
            if(err) {
                res.status(500).json(err);
            }
            else {
                res.json(resp);
            }
        })
    })
    .put(function(req, res) {
        if(!req.query.id) {
            res.status(500).send('You need to send an id plz')
        }
        else {
            db.sightings.findAndModify({
                query: {
                    _id: mongojs.ObjectId(req.query.id)
                },
                update: {
                    $set: req.body
                }
            }, function(err, resp) {
                if(err) {
                    res.status(500).json(err);
                }
                else {
                    res.json(resp);
                }
            });
        }
    })
    .delete(function(req, res) {
        if(!req.query.id) {
            res.status(500).send('You need to send an id plz')
        }
        else {
            db.sightings.remove({
                _id: mongojs.ObjectId(req.query.id)
            }, function(err, resp) {
                if (err) {
                    res.status(500).json(err);
                }
                else {
                    res.json(resp);
                }
            })
        }
    })

app.listen(port, function() {
    console.log('Listening on port', port);
});
