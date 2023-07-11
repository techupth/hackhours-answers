import React from "react";

const UserProfile = (props) => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <DisplayName username={props.username} />
    </div>
  );
};

const DisplayName = (props) => {
  return <p>Name: {props.username} </p>;
};

const Exercise4 = () => {
  const username = "John";

  return (
    <div className="container">
      <UserProfile username={username} />
    </div>
  );
};

export default Exercise4;
