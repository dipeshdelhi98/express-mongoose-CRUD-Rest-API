const Tutorial=require('../models/tutorialModel');
const mongoose=require('mongoose')

module.exports={

    create:async (req,res)=>{
        console.log('req body==>',req.body);

        const {title,description}=req.body

        try {
            const tutorial=new Tutorial({
                title:title,
                description:description

            })


            tutorial.save().then((data)=>{
                console.log(data)
             return res.json({
                 status:"Success",
                 message:"Succesfully Created",
                 data:data
             })
            }).catch((error)=>{
                console.log(error)
                res.status(400).send({message:"Something Went Wrong"})
            });
            
        } catch (error) {
            console.log(error)
            return res.json({
                status:"Error",
                message:"Something Went Wrong",
                data:{}

            })
            
        }
    },


    findAll:async(req,res)=>{

        console.log("Inside findAll");
    
        Tutorial.find({}).then((data)=>{
            // console.log(data)

         return res.send(data)
        }).catch((error)=>{
            console.log(error)
            res.status(400).send({message:"Something Went Wrong"})
        });
        
    },


    findById:async(req,res)=>{

        console.log("req params==>",req.params)

        Tutorial.findOne({id:req.params.id}).then((data)=>{
            console.log(data)

         return res.send(data)
        }).catch((error)=>{
            console.log(error)
            res.status(400).send({message:"Something Went Wrong"})
        });


    },

    updateById:async(req,res)=>{

        console.log("req params==>",req.params)
        console.log("req.body ",req.body);

        const id = mongoose.Types.ObjectId(req.params.id.trim());

        console.log(id)

        Tutorial.findByIdAndUpdate(id,req.body ).then((data)=>{
            return res.send({message:"Successfully Updated"})

        //  return res.send(data)
        }).catch((error)=>{
            console.log(error)
            res.status(400).send({message:"Something Went Wrong"})
        });


    },

    deleteById:async(req,res)=>{

        console.log("req params==>",req.params)
        console.log("req.body ",req.body);

        const id = mongoose.Types.ObjectId(req.params.id.trim());

        console.log(id)

        Tutorial.findByIdAndRemove(id).then((data)=>{
            return res.send({message:"Successfully Deleted"})

        //  return res.send(data)
        }).catch((error)=>{
            console.log(error)
            res.status(400).send({message:"Something Went Wrong"})
        });


    },

}