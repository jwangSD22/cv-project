import React from 'react'
import { v4 } from 'uuid'

function ExperienceList({exp}) {
   
let array = exp.map((xp)=>{

    return(
<div className="rExpEntry" key={v4()}>
    
    <div className='rTop'>
    <div className='xpDates'>{xp.xpfrom}-{xp.xpto}</div>
    <div className='xpInfo'>{xp.position}
    <p>{xp.company},{xp.city}</p>
    </div>
    </div>
    <div className='xpDesc'>{xp.xpdesc}</div>
    
   </div>
)})



  return (

    <div>
        <h2>Experience</h2>

 <div className='rExpEntries'>{array}</div>
  
  </div>
  )
}

export default ExperienceList