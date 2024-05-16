let mongoose=require("mongoose")

let qsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "c1":String,
    "c2":String,
    "c3":String,
    "c4":String,
    "c5":String,
    "ans":String
})
let qmodel=mongoose.model("qdb",qsch)
module.exports=qmodel