import React, { useContext } from 'react'
import Ct from './Ct'
import { Link, useNavigate} from 'react-router-dom'

const Landingpage = () => {
    let obj=useContext(Ct)
  return (
    <div>
        <h1>Name : {obj.cont.name}</h1>
        <p>Your email : {obj.cont._id}</p>
        <div>  it is your {obj.cont.atmpt+1} attempt </div>
        {
            obj.cont.bscore&&<div>Your previous best score {obj.cont.bscore}</div>
        }
        <button><Link to="/mcq">Start your exam</Link></button>

            

    </div>
  )
}

export default Landingpage