import React, { useContext } from "react";
import { UserDataContext } from "../App";

function AppHeader() {
  const userContext = useContext(UserDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userContext.username}</h2>
    </div>
  );
}

export default AppHeader;
