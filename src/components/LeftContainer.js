import React from 'react'
import Personal from './Personal'

function LeftContainer({personal,setPersonal,setPhoto,setPhotoURL,photo}) {





    
  return (
<Personal personal={personal} setPersonal={setPersonal} setPhoto={setPhoto} setPhotoURL={setPhotoURL} photo={photo}/>
   

  )
}

export default LeftContainer