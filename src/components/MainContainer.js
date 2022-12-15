import React, {useState} from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

function MainContainer() {


  const [photo, setPhoto] = useState([])
  const [photoURL,setPhotoURL] = useState([])
  const [personal,setPersonal] = useState(
    {
      fName: '',
      lName: '',
      title: '',
      address: '',
      phoneNum:'',
      email: '',
      desc: ''
    }
  )


  return (
    <div className='MainContainer'>
        <LeftContainer personal={personal} setPersonal={setPersonal} setPhoto={setPhoto} setPhotoURL={setPhotoURL} photo={photo}/>
        <RightContainer personal={personal} setPersonal = {setPersonal} photoURL={photoURL}/>
          
          

        </div>
 
  )
}

export default MainContainer