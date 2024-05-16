import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Reg from './Reg'
import Mcq from './Mcq'
import Landingpage from './Landingpage'
import Report from './Report'
import Ct from './Ct'
import './App.css'

const App = () => {
  let [contobj,setContobj]=useState({})
  let updCont=(obj)=>{
    setContobj({...contobj,...obj})
  }
  let obj={"cont":contobj,"updCont":updCont}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/mcq' element={<Mcq/>}/>
      <Route path='/land' element={<Landingpage/>}/>
      <Route path='/report' element={<Report/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App