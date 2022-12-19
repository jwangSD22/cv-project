import React, { useEffect } from "react";

function Personal({ personal, setPersonal, setPhoto, setPhotoURL, photo }) {
  const handleAll = function (e) {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    setPhoto([...e.target.files]);
  };




  useEffect(() => {
    if (photo.length < 1) return;
    const newPhotoURLs = [];
    
    photo.forEach((img) => newPhotoURLs.push(URL.createObjectURL(img)));
    setPhotoURL(newPhotoURLs);
  }, [photo, setPhotoURL]);





  return (
    
    <div className="Personal">
      <input
        type="text"
        name="fName"
        value={personal.fName}
        placeholder="First Name"
        onChange={(e) => handleAll(e)}
      ></input>
      <input
        type="text"
        name="lName"
        value={personal.lName}
        placeholder="Last Name"
        onChange={(e) => handleAll(e)}
      ></input>
      <input
        type="text"
        name="title"
        value={personal.title}
        placeholder="Title"
        onChange={(e) => handleAll(e)}
      ></input>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
      ></input>
      <input
        type="text"
        name="address"
        value={personal.address}
        placeholder="Address"
        onChange={(e) => handleAll(e)}
      ></input>
      <input
        type="text"
        name="phoneNum"
        value={personal.phoneNum}
        placeholder="Phone Number"
        onChange={(e) => handleAll(e)}
      ></input>
      <input
        type="text"
        name="email"
        value={personal.email}
        placeholder="E-mail"
        onChange={(e) => handleAll(e)}
      ></input>
      <textarea
        name="desc"
        value={personal.desc}
        placeholder="Description"
        onChange={(e) => handleAll(e)}
        rows="5"
        cols="40"
      ></textarea>
    </div>
  );
}

export default Personal;
