



//const Employee = require('../models/employee.model');
var service = require('../services/employees');

exports.findAll = function(req,res){
    service.findAll(req,res);
}

exports.create = function(req,res){
    service.create(req,res);
}


exports.findById = function(req,res){
    service.findById(req,res);
}


exports.findByIdAndUpdate = function(req,res){
    service.findByIdAndUpdate(req,res);
}

exports.findOneAndDelete = function(req,res){
    service.findOneAndDelete(req,res);
}