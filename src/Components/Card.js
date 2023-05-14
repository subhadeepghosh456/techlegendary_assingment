import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/teamSlice";

const Card = ({
  first_name,
  last_name,
  avatar,
  domain,
  available,
  gender,
  email,
}) => {
  const full_name = first_name + " " + last_name;
  const dispatch = useDispatch();

  const addToTeam = ({
    first_name,
    last_name,
    avatar,
    domain,
    available,
    gender,
    email,
  }) => {
    dispatch(
      addItems({
        first_name,
        last_name,
        avatar,
        domain,
        available,
        gender,
        email,
      })
    );
  };

  return (
    <div className="card-container">
      <div className="avater_container">
        <img src={avatar} alt="avater" className="avater" />
      </div>
      <div className="card-body">
        <p>Name: {full_name}</p>
        <p>Domain:{domain}</p>

        <p>Gender:{gender}</p>
        <p> Email:</p>
        <p>{email}</p>
        {available ? (
          <button
            onClick={() =>
              addToTeam({
                first_name,
                last_name,
                avatar,
                domain,
                available,
                gender,
                email,
              })
            }
          >
            Add To Team
          </button>
        ) : (
          <p>Not available</p>
        )}
      </div>
    </div>
  );
};

export default Card;
