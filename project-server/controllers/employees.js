



var service = require('../services/employees');

exports.findAll = function(req,res){
    service.findAll().then(result => res.send(result));
}

exports.addEmployee = function(req,res){
    service.addEmployee(req).then(result => res.send(result));
}


exports.findById = function(req){
    service.findById().then(result => res.send(result));
}


exports.updateById = function(req){
    service.updateById(req).then(result => res.send(result));
}

exports.delete = function(){
    service.delete(req).then(result => res.send(result));
}