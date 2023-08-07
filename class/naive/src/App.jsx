import React from 'react'
import axios from "axios"
function App  ()  {
  const handle =()=>{
    axios.post("http://localhost:5000/create-checkout-session").then((res)=>{if(res.data.url){
      window.location.href=res.data.url
    }})
  }
  return (
    <div>
<></>
      <button onClick={handle}>200</button>
    </div>
  )
}
export default App