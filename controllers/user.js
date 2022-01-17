const User=require("../models/user")


module.exports={
    index:(req,res)=>{
        User.find({})
         .then(users=>{
             res.json(users)
         })
         .catch(error=>{
             res.json({error: error})
         })
    },
    show:(req,res)=>{
        let userId = req.params.uid;
        User.findById(userId)
          .then(user =>{
              res.json({user})
          })
          .catch(error=>{
            res.json({error: error})
        })
    },
    update:(req,res)=>{
    let userId = req.params.uid;
    let userInfo={
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }

    User.findByIdAndUpdate(userId,{$set: userInfo})
    .then(user=>{
        res.json({message:"User information has been updated"})
    })
    .catch(error=>{
        res.json({error:error})
    })
    
    },
    delete:(req,res)=>{
        let userId=req.params.uid;
        User.findByIdAndRemove(userId)
        .then(()=>{
            res.json({message:"User is deleted"})
        })
        .catch(error=>{
            res.json({error:error})
        })
    },
    create:(req,res)=>{
        let userInfo= new User({
          name: req.body.name,
          age:req.body.age,
          email:req.body.email
        })
        userInfo.save()
        .then(()=>{
            res.json("new user is created");
        })
        .catch((error)=>{
            res.json({error:error});
        })
    }
}

// module.exports={
//     // home:(req,res)=>{
//     //  res.send('welcome to abdu rest Api!');
//     // },

//     index:(req,res)=>{
//      res.json(User);
//     },
//     show:(req,res)=>{
//      const user = User.find(user=> user.id === parseInt(req.params.id));
       
//      if (!user) res.status(404).send(`<h2 style="font-family: Malgun gothic; color:darkred;">Ooops... cant find what you are looking for!</h2>`);
//      res.send(user);
//     },
//     add:(req,res)=>{
//      const user = {
//         title: req.body.title,
//         id: User.length + 1
//      };
//      User.push(user);
//      res.send(User);
//     },
//     update:(req,res)=>{
//         const user = User.find(user=> user.id === parseInt(req.params.id));
//         if (!user) res.status(404).send(`<h2 style="font-family: Malgun gothic; color:darkred;">Ooops... cant find what you are looking for!</h2>`);
//         user.title = req.body.title;
//         res.send(User);    
//     },
//     delete:(req,res)=>{
//         const user = User.find(user=> user.id === parseInt(req.params.id));
//         if (!user) res.status(404).send(`<h2 style="font-family: Malgun gothic; color:darkred;">Ooops... cant find what you are looking for!</h2>`);
//         const index=User.indexOf(user);
//         User.splice(index,1);
//         res.send(User);

        
//     }
 
//  }

