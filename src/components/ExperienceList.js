import React from "react";
import { v4 } from "uuid";

function ExperienceList({ exp }) {
  let array = exp.map((xp) => {
    return (
      <div className="rExpEntry" key={v4()}>
        <div className="rExpDates">
          <h3>
            {xp.xpfrom}-{xp.xpto}
          </h3>
        </div>
        <div className="expInfo">
          <div>
            <h3>{xp.position}</h3>
            {xp.company},{xp.city}
          </div>
          <div className="xpDesc">{xp.xpdesc}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="expHeader">
      <h2>Experience</h2>

      <div className="rExpEntries">{array}</div>
    </div>
  );
}

export default ExperienceList;
