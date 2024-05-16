import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'


const Mcq = () => {
    let [data,setData]=useState([])
    let [ans,setAns]=useState({})
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5000/getqns").then((res)=>{
            setData(res.data)
        })
    },[])
    let fun=(e)=>{
        setAns({...ans,[e.target.name]:e.target.value})
    }
    let sub=()=>{
        axios.post("http://localhost:5000/eval",{...ans,"_id":obj.cont._id}).then((res)=>{
            // console.log(res.data)
            obj.updCont({...res.data,"qns":data,"ans":ans})
            navigate("/report")

        })
        // console.log(ans)
    }
    
  return (
    <div>
        {
            data.map((item)=>{
                return(<div>
                    <h1>{item.title}</h1>
                    <input type="radio" name={item._id} value="c1" onChange={fun}/>{item.c1}
                    <input type='radio' value="c2" name={item._id} onChange={fun}/>{item.c2}
                    {item.c3&&<> <input type='radio' value="c3" name={item._id} onChange={fun}/>{item.c3} </>}
                    {item.c4&&<>  <input type='radio' value="c4" name={item._id} onChange={fun}/>{item.c4} </>}
                    {item.c5&&<> <input type='radio' value="c5" name={item._id} onChange={fun}/>{item.c5} </>}

                </div>)
            })
        }
        <button onClick={sub}>Submitexam</button>

    </div>
  )
}

export default Mcq
