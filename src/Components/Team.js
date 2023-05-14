import React from "react";
import { useSelector } from "react-redux";
import TeamItem from "./TeamItem";
import { Link } from "react-router-dom";

const Team = () => {
  const teamItems = useSelector((store) => store.team.items);
  console.log(teamItems);
  return (
    <>
      <h1>Team</h1>
      <Link to="..">
        {" "}
        <h6>Go back to home</h6>
      </Link>
      <div className="main-body">
        {teamItems.map((item, index) => (
          <TeamItem key={index} {...item} />
        ))}
      </div>
   </>
  );
};

export default Team;
