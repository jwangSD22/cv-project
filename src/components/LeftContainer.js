import React from "react";

import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import { v4 } from "uuid";



function LeftContainer({
  personal,
  setPersonal,
  setPhoto,
  setPhotoURL,
  photo,
  exp,
  setExp,
  edu,
  setEdu,
  photoURL
}) {







  const addXp = () => {
    let newID = v4();
    setExp([
      ...exp,
      {
        id: newID,
        position: "",
        company: "",
        city: "",
        xpfrom: "",
        xpto: "",
      },
    ]);
  };



  const addEdu = () => {
    let newID = v4();
    setEdu([
      ...edu,
      {
        id: newID,
        institution: "",
        eduCity: "",
        degree: "",
        subject: "",
        edufrom: "",
        eduto: "",
      },
    ]);
  };

  return (
    <div className="LeftContainer">
      <h3>Personal Information</h3>
      <Personal
        personal={personal}
        setPersonal={setPersonal}
        setPhoto={setPhoto}
        setPhotoURL={setPhotoURL}
        photo={photo}
      />
      <h3>Experience</h3>
      <Experience exp={exp} setExp={setExp} />
      <button onClick={() => addXp()}>ADD EXPERIENCE</button>
      <h3>Education</h3>
      <Education edu={edu} setEdu={setEdu} />

      <button onClick={() => addEdu()}>ADD EDUCATION</button>
      


    </div>

    
  );
}

export default LeftContainer;
