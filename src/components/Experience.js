import React from "react";

function Experience({ exp, setExp }) {
  //position
  //company
  //city
  //from
  //to

  const handleAll = function (e) {
    for (let i = 0; i < exp.length; i++) {
      if (e.target.id === exp[i].id) {
        let temp = exp[i];
        temp[e.target.name] = e.target.value;
        setExp([...exp]);
      }
    }
  };

  const deleteEntry = function (id) {
    for (let i = 0; i < exp.length; i++) {
      if (id === exp[i].id) {
        exp.splice(i, 1);
        setExp([...exp]);
      }
    }
  };

  return (
    <div>
      {exp.map((xp) => (
        <div key={xp.id}>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={xp.position}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={xp.company}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={xp.city}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="xpfrom"
            placeholder="From"
            value={xp.xpfrom}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <input
            type="text"
            name="xpto"
            placeholder="To"
            value={xp.xpto}
            onChange={(e) => handleAll(e)}
            id={xp.id}
          ></input>

          <button id={xp.id} onClick={(e)=>deleteEntry(e.target.id)}>
            DELETE THIS EXP ENTRY
          </button>
        </div>
      ))}
    </div>
  );
}

export default Experience;
