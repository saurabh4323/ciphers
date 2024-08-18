import React from "react";
import "./Team.css";
import members from "./member.json";
import Header from "../Header/Header";

const Team = () => {
  const firstRow = members.slice(0, 3);
  const remainingRows = members.slice(3);

  return (
    <>
      <Header></Header>
      <div className="team-container">
        <h2 className="team-heading">Senior Emotetes</h2>
        <div className="team-row">
          {firstRow.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
        {remainingRows
          .reduce((rows, member, index) => {
            if (index % 4 === 0) {
              rows.push([]);
            }
            rows[rows.length - 1].push(member);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div key={rowIndex} className="team-row">
              {row.map((member) => (
                <div key={member.id} className="team-member">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Team;
