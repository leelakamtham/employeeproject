

module.exports = function(app) {

var employees = require('./employees');

app.use('/api',employees);



app.get('/',(req,res)=>{
    res.send('welcome');
})


}