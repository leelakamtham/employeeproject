



exports.findAll = function(){


let promise = new Promise((resolve,reject)=>{
 var list = [{

    "name ":"leela",
    "id": 567,
    "email": "leela@g.c",
    "mobile":98789700

 },
{
    "name ":"roshan",
        "id": 765,
        "email": "roshan@g.c",
        "mobile":4567234
    
}]


resolve(list);

})

return promise;
}

/*
exports.findById = function(id){

       
 let id = req.body.id;

    let promise = new Promise((resolve,reject)=>{
  

        list =[{
         "name ":"leela",
         "id": 567,
         "email": "leela@g.c",
         "mobile":98789700
     
        },
        {
            "name ":"roshan",
                "id": 765,
                "email": "roshan@g.c",
                "mobile":4567234
            
        }
     
     
     ]
     
     
     
     
      var item = list.filter(item => item.id === 'id');
     
         resolve(item);
         
         })
         
         return promise;
         }



 exports.addEmployee = function(req){


        let promise = new Promise((resolve,reject)=>{
         var list = [{
        
            name : req.body.name,
            id: req.body.id,
            email: req.body.email,
            mobile:req.body.mobile
        
         }]
        
        
        resolve(list);
        
        })
        
        return promise;
        }



//

 exports.updateById = function(req){


  let promise = new Promise((resolve,reject)=>{
    var list = [{
            
      name :req.body.name,
       id: req.body.id,
      email: req.body.email,
      mobile: req.body.mobile
            
      }]
            
            
      resolve(list);
            
            })
            
            return promise;
            }







// delete employee by id

exports.delete = function(){


    let promise = new Promise((resolve,reject)=>{
  resolve("deleted successfully");

    })

   return promise;

}


*/


