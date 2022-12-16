import React from "react";


function Education({ edu, setEdu }) {
  const handleAll = function (e) {
    for (let i = 0; i < edu.length; i++) {
      if (e.target.id === edu[i].id) {
        let temp = edu[i];
        temp[e.target.name] = e.target.value;
        setEdu([...edu]);
      }
    }
  };

  const deleteEntry = function (id) {
    for (let i = 0; i < edu.length; i++) {
      if (id === edu[i].id) {
        edu.splice(i, 1);
        setEdu([...edu]);
      }
    }
  };

  return (
    <div>
      {edu.map((xp) => (
        <div className='eduEntry' key={xp.id}>
          <input
            type="text"
            name="institution"
            placeholder="Instituion"
            value={xp.institution}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>
          <input
            type="text"
            name="eduCity"
            placeholder="City"
            value={xp.eduCity}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={xp.degree}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={xp.subject}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="edufrom"
            placeholder="From"
            value={xp.edufrom}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="eduto"
            placeholder="To"
            value={xp.eduto}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <button id={xp.id} onClick={(e) => deleteEntry(e.target.id)}>
            DELETE THIS EXP ENTRY
          </button>
        </div>
      ))}
    </div>
  );
}

export default Education;
