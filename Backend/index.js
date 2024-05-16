let express=require("express")
let mongoose=require("mongoose")
const route = require("./Routes/route")
let app=express()
app.use(express.json())

var cors = require('cors')
app.use(cors())

mongoose.connect("mongodb://localhost:27017/v23hfs2").then(()=>{
    console.log("ok")
})

app.use("/",route)
app.listen(5001)