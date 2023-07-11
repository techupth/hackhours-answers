import React from "react";

const Exercise4 = () => {
  const username = "John";

  function UserProfile() {
    return (
      <div className="profile">
        <h2>User Profile</h2>
        <DisplayName />
      </div>
    );
  }

  function DisplayName() {
    return <p>Name: </p>;
  }

  return (
    <div className="container">
      <UserProfile />
    </div>
  );
};

export default Exercise4;
