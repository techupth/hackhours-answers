import React from "react";
import "../App.css";

const Exercise1 = () => {
  function Link() {
    return <a href="https://www.techupth.com">techupth.com</a>;
  }

  return (
    <div className="container">
      <header>
        <h1>Website Header</h1>
        <Link />
      </header>
      <main>
        <h1>Main Section</h1>
        <Link />
      </main>
      <footer>
        <h1>Website Footer</h1>
        <Link />
      </footer>
    </div>
  );
};

export default Exercise1;
