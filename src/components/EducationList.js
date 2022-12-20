import React from 'react'
import { v4 } from 'uuid'

function EducationList({edu}) {
   
let array = edu.map((xp)=>{

    return(
<div className="rEduEntry" key={v4()}>
    
    <div className='eduDates'><h3>{xp.edufrom}-{xp.eduto}</h3></div>
    <div className='eduInfo'><h3>{xp.institution} {xp.eduCity}</h3>
    Degree:{xp.degree}
    <br></br>
    Subject:{xp.subject}
    </div>
    
   </div>
)})



  return (

    <div className='expHeader'>
        <h2>Education</h2>

 <div className='rEduEntries'>{array}</div>
  
  </div>
  )
}

export default EducationList