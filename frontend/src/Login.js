import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Ct from './Ct'




const Login = () => {
    let [data,setData]=useState({"_id":"","pwd":""})
    let [err,setErr]=useState("")
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let login=()=>{
        axios.post("http://localhost:5000/login",data).then((res)=>{
            if(res.data._id){
                obj.updCont(res.data)
                navigate("/land")
                setErr("")
            }
            else{
                setErr(res.data)
            }
        })
        
    }
  return (
    <div className='logincon'>
    <div className='login'>
        <div>{err}</div>
        <input type='text' placeholder='enter email' name="_id" value={data._id} onChange={fun}/>
        <input type='password' placeholder="enter password" name="pwd" value={data.pwd} onChange={fun}/>
        <button onClick={login}>Login</button>
        <div><Link to="/reg">New user?? click to Register</Link></div>
        
    </div>
    </div>
  )
}

export default Login