import React from "react";
import { motion } from "framer-motion";
import "./Team.css";
import members from "./member.json";
import Header from "../Header/Header";
import Foot from "../Footer/Foot";
const Team = () => {
  const firstRow = members.slice(0, 3);
  const remainingRows = members.slice(3);

  return (
    <>
      <Header />
      <div className="team-container">
        <h2 className="team-heading">Senior Emotets</h2>
        <motion.div
          className="team-row"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 500 }}
        >
          {firstRow.map((member) => (
            <motion.div
              key={member.id}
              className="team-member"
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </motion.div>
          ))}
        </motion.div>
        {remainingRows
          .reduce((rows, member, index) => {
            if (index % 4 === 0) {
              rows.push([]);
            }
            rows[rows.length - 1].push(member);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="team-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: rowIndex * 0.2,
                type: "spring",
                stiffness: 500,
              }}
            >
              {row.map((member) => (
                <motion.div
                  key={member.id}
                  className="team-member"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </motion.div>
              ))}
            </motion.div>
          ))}
      </div>
      <Foot></Foot>
    </>
  );
};

export default Team;
