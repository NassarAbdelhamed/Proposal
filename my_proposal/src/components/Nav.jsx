import React, { useState } from 'react'
import '../styles/Nav.css'
import ReorderIcon from '@material-ui/icons/Reorder'

function Nav() {
    const [state,setstatr]=useState(false)
  return (
    <div className='nav' id={state?'open':'close'}>
        <div className='links'>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/experience">Experience</a>
        </div>
        <div className='but'>
            <button onClick={()=>{setstatr((prev)=>!prev)}}>
             <ReorderIcon  fontSize="large"/>
            </button>
        </div>
    </div>
  )
}

export default Nav