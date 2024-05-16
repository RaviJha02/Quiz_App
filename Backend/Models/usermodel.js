let mongoose=require("mongoose")

let userschm=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "atmpt":{
        type:Number,
        default:0
    },
    "bscore":Number,
    "score":[],
    "ans":[]
})

let usermodel=mongoose.model("userdb",userschm)
module.exports=usermodel