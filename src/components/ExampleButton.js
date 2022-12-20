import React from "react";
import exampleHS from "../assets/hs_cropped.png";
import { v4 } from "uuid";

function ExampleButton({ setPersonal, setPhoto, setPhotoURL, setExp, setEdu }) {
  const setExample = () => {
    setPhoto("");
    setPhotoURL([exampleHS]);
    setExp([
      {
        id: v4(),
        position: "Counselor",
        company: "Bright Time Learning",
        city: "Portland, Oregon",
        xpfrom: "2013",
        xpto: "2014",
        xpdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis venenatis urna. Cras vitae nisl vulputate lorem maximus convallis non sit."
      },
      {
        id: v4(),
        position: "Counselor",
        company: "Bright Time Learning",
        city: "Portland, Oregon",
        xpfrom: "2013",
        xpto: "2014",
        xpdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis venenatis urna. Cras vitae nisl vulputate lorem maximus convallis non sit."
      },
      {
        id: v4(),
        position: "Counselor",
        company: "Bright Time Learning",
        city: "Portland, Oregon",
        xpfrom: "2013",
        xpto: "2014",
        xpdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis venenatis urna. Cras vitae nisl vulputate lorem maximus convallis non sit."
      }
    ]);

    setPersonal({
      fName: "Johnathan",
      lName: "Doe",
      title: "Consultant",
      address: "123 Tribeca Court San Diego, CA 92123",
      phoneNum: "(555)-555-1234",
      email: "johndoe@webdev.com",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis venenatis urna. Cras vitae nisl vulputate lorem maximus convallis non sit amet sem. Donec commodo diam quis quam dictum vulputate. Nullam malesuada risus metus, id sodales est porttitor a. Etiam non tortor eu ipsum dapibus.",
    });

    setEdu([
      {
        id: v4(),
        institution: "Secret IVY college",
        eduCity: "Portland, Maine",
        degree: "PhD",
        subject: "Psychology",
        edufrom: "2007",
        eduto: "2014",
      },
      {
        id: v4(),
        institution: "Secret IVY college",
        eduCity: "Portland, Maine",
        degree: "PhD",
        subject: "Psychology",
        edufrom: "2007",
        eduto: "2014",
      }
    ]);
  };

  return <button onClick={() => setExample()}>Example</button>;
}

export default ExampleButton;
