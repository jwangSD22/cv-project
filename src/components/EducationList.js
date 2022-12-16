import React from 'react'
import { v4 } from 'uuid'

function EducationList({edu}) {
   
let array = edu.map((xp)=>{

    return(
<div className="rEduEntry" key={v4()}>
    
    <div className='eduDates'>{xp.edufrom}-{xp.eduto}</div>
    <div className='eduInfo'>{xp.institution}
    <p>{xp.degree},{xp.eduCity}</p></div>
    
   </div>
)})



  return (

    <div>
        <h2>Education</h2>

 <div className='rEduEntries'>{array}</div>
  
  </div>
  )
}

export default EducationList