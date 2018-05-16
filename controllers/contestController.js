const cfg                   = require('config');

const Contest               = require('../models/objects/Contest');

const ContestController     = {
    
    test : (req, res, next) => {
        let c = new Contest();
        c.save();
        res.send('success');
    },

    create : (req, res, next) => {
        let Redirect                = req.db.model('redirects');
        let data                    = req.body;
        
        if(data != null && data != undefined){
            let ri                      = new Redirect(data);
            ri.save(function(err, p){
                if(!err){
                    res.send({success: true, data: data});
                } else {
                    console.log(err);
                    res.send({success: false, data: err.name});
                };
            });
        } else {
            res.send({success:false, data: 'SERVICE FAILURE DATA INCORRECT'});
        }
    },

    getContests: (req, res, next) => {

    }

}

module.exports.Controller   = ContestController;

module.exports.controller   = (app) => {
    app.get('/v1/contest/test', ContestController.test);
    app.post('/v1/contest/create', ContestController.create);
}