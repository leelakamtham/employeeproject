
var employees = require('../controllers/employees');

const express = require('express');

var app = express.Router();


app.get('/employees',employees.findAll);
app.get('/employees/:id',employees.findById);
app.post('/employee',employees.addEmployee);
app.put('/employees/:id',employees.updateById);

app.delete('/employees/:id',employees.delete);


module.exports = app;