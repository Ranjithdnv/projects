import React from 'react'
import {Routes, Route }from  "react-router-dom"
import Home from './home'
import Raa from "./raa"
function  App ()  {
  return (
    <div>



< Routes>

    <Route
    path="/payment"
    element={<Raa/>}
  />
  <Route
    path="/"
    element={<Home/>}
  />
</Routes>
    </div>
  )
}
export default App