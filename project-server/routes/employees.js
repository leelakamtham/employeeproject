
const employees = require("../controllers/employees.js");

const express = require('express');

var app = express.Router();


app.get('/employees',employees.findAll);
app.get('/employees/:_id',employees.findById);
app.post('/employee',employees.create);
app.put('/employees/:id',employees.findByIdAndUpdate);

app.delete('/employees/:id',employees.findOneAndDelete);


module.exports = app;