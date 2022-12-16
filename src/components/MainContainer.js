import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function MainContainer() {
  const [photo, setPhoto] = useState([]);
  const [photoURL, setPhotoURL] = useState([]);
  const [personal, setPersonal] = useState({
    fName: "",
    lName: "",
    title: "",
    address: "",
    phoneNum: "",
    email: "",
    desc: "",
  });

  const [exp, setExp] = useState([
{
  id:'',
  position:'',
  company:'',
  city:'',
  xpfrom:'',
  xpto:'',
}

  ]);
  const [edu, setEdu] = useState([
    {
      id:'',
      institution:'',
      eduCity:'',
      degree:'',
      subject:'',
      edufrom:'',
      eduto:''
    }
    
  ]);

  return (
    <div className="MainContainer">
      <LeftContainer
        exp={exp}
        setExp={setExp}
        personal={personal}
        setPersonal={setPersonal}
        setPhoto={setPhoto}
        setPhotoURL={setPhotoURL}
        photo={photo}
        edu={edu}
        setEdu={setEdu}
        photoURL={photoURL}
      />
      <RightContainer
        personal={personal}
        setPersonal={setPersonal}
        photoURL={photoURL}
        exp={exp}
        edu={edu}
      />



    </div>
  );
}

export default MainContainer;
