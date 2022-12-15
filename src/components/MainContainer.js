import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { v4 } from "uuid";

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

  const [exp, setExp] = useState([]);
  const [edu, setEdu] = useState([]);

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
      />
      <RightContainer
        personal={personal}
        setPersonal={setPersonal}
        photoURL={photoURL}
      />
    </div>
  );
}

export default MainContainer;
