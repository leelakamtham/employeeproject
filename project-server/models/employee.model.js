const mongoose = require('mongoose');

   const Employee = mongoose.model('employee',
   mongoose.Schema( 
   
   
   {
        id:{
         type:Number,
         equired: true
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









      
   );
   //return Employee;
   

   module.exports = Employee;

   