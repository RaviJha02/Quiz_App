let express=require("express")
const { adduser,getqns,addqns,login,evalans } = require("../Controllers/mcqcon")

let route=new express.Router()

route.get("/getqns",getqns)
route.post("/addqns",addqns)
route.post("/adduser",adduser)
route.post("/login",login)
route.post("/eval",evalans)
module.exports=route