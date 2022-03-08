const mongoose=require('mongoose');

const tutorialSchema=mongoose.Schema({
    title:{
        type:"String",
        required:true
    },
    description:{
        type:"String",
        required:true
    }
});


const tutorialModel=mongoose.model('tutorials',tutorialSchema);

module.exports=tutorialModel;