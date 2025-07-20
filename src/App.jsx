import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>


    </div>
  )
}

export default App