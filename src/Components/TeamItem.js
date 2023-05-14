import React from 'react';

const TeamItem = ({
  first_name,
  last_name,
  avatar,
  domain,
  available,
  gender,
  email,
}) => {
    const full_name = first_name + " " + last_name;
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
      </div>
    </div>
  );
}

export default TeamItem;
