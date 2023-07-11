import React from "react";
const Exercise3 = () => {
  const article1 = {
    title: "My Lovely Dog",
    image: "https://placedog.net/500",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent vehicula sollicitudin elit. Sed justo leo,
      consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem`,
    author: "John",
  };

  const article2 = {
    title: "Hello Hoomannnn :D",
    image: "https://placedog.net/500/300",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent vehicula sollicitudin elit. Sed justo leo,
      consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem`,
    author: "James",
  };

  function Article() {
    return (
      <div className="article">
        <div className="article-title">Title: </div>
        <div className="article-image">Preview Image: </div>
        <div className="article-content">Content: </div>
        <div className="article-author">Author: </div>
      </div>
    );
  }

  return <div className="container">{/* Start Coding Here */}</div>;
};

export default Exercise3;
