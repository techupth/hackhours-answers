import React from "react";
import "../App.css";

const Link = (props) => {
  return <a href={props.url}>{props.linkText}</a>;
};

const Exercise1 = () => {
  return (
    <div className="container">
      <header>
        <h1>Website Header</h1>
        <Link url="https://www.google.com" linkText="Go to Google.com" />
      </header>
      <main>
        <h1>Main Section</h1>
        <Link url="https://www.techupth.com" linkText="Go to Techupth.com" />
      </main>
      <footer>
        <h1>Website Footer</h1>
        <Link url="https://www.facebook.com" linkText="Go to Facebook.com" />
      </footer>
    </div>
  );
};

export default Exercise1;
