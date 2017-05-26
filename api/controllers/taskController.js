var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

module.exports = function () {
    var self = this;

    self.findAll = function (req, res, next) {
        
        var result = [{ name: 'Fazer Code Dojo', desc: 'Fazer', status: false }]
        res.end(JSON.stringify(result, null, 2))
    }
    self.add = function (req, res, next) {
        var result = req.body; 

        //console.log(JSON.stringify(res)+ `${req} ${res} ${next}`);
    };
    self.delete = function (req, res, next) {

    };
    self.update = function (req, res, next) {

    };

    return self;
}