const qmodel=require("../Models/qm")
let {v4:uuid4}=require('uuid')
const usermodel = require("../Models/usermodel")

let addqns=async(req,res)=>{
    try{
        let qid=uuid4()
        await new qmodel({...req.body,"_id":qid}).save()
    
        res.send("qestion added")
    }
    catch(err){
        res.json(err)
    }
}

let getqns=async(req,res)=>{
    try{
        let qns=await qmodel.aggregate([{$sample:{"size":5}}]).exec()
        res.json(qns)
    }
    catch(err){
        res.json(err)
    }
}

let adduser=async(req,res)=>{
    try{
        let data=await usermodel.findById({"_id":req.body._id})
        if(data){
            res.send("email already exist.provide another email")
        }
        else{
            await new usermodel(req.body).save()
            res.send("sucessfully register")
            
        }
    }
    catch(err){
        console.log(err)
    }
}

let evalans=async(req,res)=>{
    try{
        let dbans=await qmodel.find()
        let userans=req.body
        let c=0
        // console.log(userans)
        for(let i=0;i<dbans.length;i++){
            if(userans[dbans[i]._id]){
                if(userans[dbans[i]._id]==dbans[i].ans){
                    c=c+1
                }
            }
        }
        let user=await usermodel.findById({"_id":req.body._id})
        if(user.bscore&&user.bscore>c){
            await usermodel.findByIdAndUpdate({"_id":req.body._id},{"atmpt":user.atmpt+1,$push:{"ans":userans}})
        }
        else{
            await usermodel.findByIdAndUpdate({"_id":req.body._id},{"bscore":c,"atmpt":user.atmpt+1,$push:{"ans":userans}})

        }
        await usermodel.findByIdAndUpdate({"_id":req.body._id},{$push:{"score":c}})
        // console.log(user)
        let data=await usermodel.findById({"_id":req.body._id})
        res.json({"atmpt":data.atmpt,"bscore":data.bscore,"cs":c})
        
    }
    catch(err){
        console.log(err)
    }
}

let login=async(req,res)=>{
    try{
        let data=await usermodel.findById({"_id":req.body._id})
        if(data)
        {
            // console.log(data,req.body.pwd)
            if(data.pwd==req.body.pwd){
                res.json({"_id":data._id,"name":data.name,"atmpt":data.atmpt,"bscore":data.bscore})
            }
            else{
                res.send("provide valid password")
            }
        }
        else{
            res.send("check email")
        }
    }
    catch(err){
        console.log(err)
    }
}
module.exports={addqns,getqns,adduser,login,evalans}