import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Reg = () => {
    let [data,setData]=useState({"_id":"","pwd":"","name":""})
    let [err,setErr]=useState("")
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let reg=()=>{
        axios.post("http://localhost:5000/adduser",data).then((res)=>{
            if(res.data=="email already exist.provide another email"){
                setErr(res.data)
                
            }
            else{
                navigate("/")
                setErr("")
            }
         

        })
        
    }
  return (
    <div className='logincon'>
    <div className='login'>
        <div>{err}</div>
        <input type='text' placeholder='enter email' name="_id" value={data._id} onChange={fun}/>
        <input type='text' placeholder='enter name' name="name" value={data.name} onChange={fun}/>
        <input type='password' placeholder="enter password" name="pwd" value={data.pwd} onChange={fun}/>
        <button onClick={reg}>Register</button>
        <div><Link to="/">Already account?? click to Login</Link></div>
    </div>
    </div>
  )
}

export default Reg