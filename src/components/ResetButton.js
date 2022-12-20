import React from 'react'
import emptyAvatar from '../assets/empty_avatar.png'
import { v4 } from 'uuid';


function ResetButton({setPersonal,setPhoto,setPhotoURL,setExp,setEdu}) {

    const resetAll = () => {
    setPhoto('');
    setPhotoURL([emptyAvatar]);
    setExp([
        {
            id:v4(),
            position:'',
            company:'',
            city:'',
            xpfrom:'',
            xpto:'',
            xpdesc:''
        }
    ])

    setPersonal({
        fName: "",
        lName: "",
        title: "",
        address: "",
        phoneNum: "",
        email: "",
        desc: ""
    })

    setEdu([{
        id:v4(),
        institution:'',
        eduCity:'',
        degree:'',
        subject:'',
        edufrom:'',
        eduto:''
    }])
    }

  return (
    <button onClick={()=>resetAll()}>Clear all data</button>
  )
}

export default ResetButton

