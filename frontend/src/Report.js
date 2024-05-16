import React, { useContext } from 'react'
import Ct from './Ct'

const Report = () => {
  let obj=useContext(Ct)
  let qns=obj.cont.qns
  return (
    <div>
      <h1>Name:{obj.cont.name}</h1>
      <h1>your best score:{obj.cont.bscore}</h1>
      <h1>your current score:{obj.cont.cs}</h1>
      <h1>its your:{obj.cont.atmpt} attempt</h1>
      
      <h1>Your attempted questions are as given below :-</h1>
      <div>
        {
            qns.map((item)=>{
              let userans=obj.cont.ans[item._id]
              return(
                <div>
                <div>{item.title}</div>
         <div className={item.ans=="c1"? "input":""}>       <input type="checkbox" name={item._id} checked={userans=="c1" || item.ans=="c1"? true:false}   readOnly/>{item.c1} </div>
         <div className={item.ans=="c2"? "input":""}>  <input type="checkbox" name={item._id} checked={userans=="c2" || item.ans=="c2"? true:false} readOnly/>{item.c2} </div>
         <div className={item.ans=="c3"? "input":""}>  {item.c3 &&<><input type="checkbox" name={item._id} checked={userans=="c3" || item.ans=="c3"? true:false} readOnly/>{item.c3}</>} </div>
         <div className={item.ans=="c4"? "input":""}>      {item.c4 &&<><input type="checkbox" name={item._id} checked={userans=="c4" || item.ans=="c4"} readOnly/>{item.c4}</>} </div>

         <div className={item.ans=="c"? "input":""}>      {item.c5 &&<><input type="checkbox" name={item._id} checked={userans=="c5" || item.ans=="c5"} readOnly/>{item.c5}</>} </div>


                </div>
            )
            })
        }
     

    </div>
    </div>
  )
}

export default Report