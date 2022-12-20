import React, {useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import ReactToPrint from 'react-to-print';
import emptyAvatar from '../assets/empty_avatar.png'
import ResetButton from "./ResetButton";
import ExampleButton from "./ExampleButton";



function MainContainer() {
  
  
  const [photo, setPhoto] = useState([]);
  const [photoURL, setPhotoURL] = useState([emptyAvatar]);
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
  xpdesc:''
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

  /// INPUTTING PRINT //
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    return <button>PRINT BUTTON</button>;
  }, []);

  /////

  return (
    <div className="MainContainer">
      <div className="MainLeft">
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

        content={reactToPrintContent}
        documentTitle="My CV"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />


<ReactToPrint
        content={reactToPrintContent}
        documentTitle="My CV"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />

      <ResetButton
      setPersonal = {setPersonal}
      setPhoto = {setPhoto}
      setPhotoURL = {setPhotoURL}
      setExp = {setExp}
      setEdu = {setEdu}
      />
            <ExampleButton
      setPersonal = {setPersonal}
      setPhoto = {setPhoto}
      setPhotoURL = {setPhotoURL}
      setExp = {setExp}
      setEdu = {setEdu}
      />

      </div>
<div className="MainRight">
      <RightContainer 
          personal={personal}
          setPersonal={setPersonal}
          photoURL={photoURL}
          exp={exp}
          edu={edu}
          ref={componentRef} text={text} />
</div>

    </div>






  
  );
}



export default MainContainer;
