const mongoose = require('mongoose');
const Joi = require('joi');

   const Employee = mongoose.model('employee',
   mongoose.Schema( 
   
   
   {
        _id:{
         type:Number,
         required: true,
         unique:true
         },
         name:{
         type: String,
         required: true
          },
     
      email:{
         type: String,
         required: true
      },
     
      mobilenum: {
         type: Number,
         required: true
       },
     address:{
        type:String,
        required:true
      }
     
   
      }   )

     /*

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


     */

 //return Employee;







      
   );






   function validateEmployee(employee){
      const schema ={
         _id:Joi.Number().min(2).required().unique(),
         name:Joi.String().min(3).max(255).required(),
         email:Joi.String().min(5).max(255).required()

      };
      return Joi.validate(employee,schema);
   }
  
   

   module.exports = Employee;
   //module.exports = validateEmployee;

   