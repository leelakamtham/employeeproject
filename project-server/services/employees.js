

//const { validate } = require('../models/employee.model');
const Employee = require('../models/employee.model');


//    retrive all Employees data*********
exports.findAll = function(req,res){

 //  const email = req.body.email;
 //  var condition = email ? {email:{$regex:new RegExp(email),$options:"i"}}:{};
  
Employee.find()

.then(employees =>
   res.send(employees))
   .catch(err => res.send(err));
   

 
}


// ********  CREATE NEW EMPLOYEE DATA **********



exports.create = function(req,res){
//let promise =new Promise((resolve,reject)=>{  

//const error = validate(req.body);
//if(error) return res.status(400).send(error.details[0].message);




   const employee = new Employee({
     _id:req.body._id,
     name: req.body.name,
    email:req.body.email,
    mobilenum: req.body.mobilenum,
     address:req.body.address
});


//save note in db
employee.save()
.then(data=> res.send(data))
.catch(err => res.send(err));

}
//return Employee;

//resolve(employee);
//})
   

//return promise;
  



//      ******* retrive   and return SINGLE id from database


exports.findById = function(req,res){

 
 const _id = req.params._id;

   Employee.findById(_id)
   .then(employee => {
       if(!employee){
           return res.send({
               message: `not found  ${req.params._id}`
           })

       }else{ 
       return res.status(200).send(employee)
       }
})

     
     
     
     
}




//  *******  UPDATE an EMPLOYEE based on ID


 exports.findByIdAndUpdate = function(req,res){



  // Validate Request
  if (!req.body) {
   return res.status(400).send({
     message: "Data to update can not be empty!"
         });
    }

 const id= req.params.id;






// Find employee and update it with the request body
Employee.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
   
.then(employee => {
   if(!employee) {
       return res.send({
           message: "employee does not exist " + id
       });
   }else  res.send({ message:"employee data was updated successfully."});
}).catch(err => res.send(err))


 
}









// delete employee by id

exports.findOneAndDelete = function(req,res){


   const id = req.params.id;
   Employee.findByIdAndRemove(id)
   .then(employee => {
       if(!employee) {
            res.status(404).send({
               message: "employee not found with id " + id
           });
       }
       else{ 
       res.send({message: `employee deleted successfully! with id ${id}`});
      }
   }).catch(err =>{ 
       
        res.status(500).send({
           message: "Could not delete note with id " + req.params.id
       })
         
      
   });



}





/* name: req.body.name,
email:req.body.email,
mobilenum: req.body.mobilenum,
 address:req.body.address
}, {new: true})

*/



