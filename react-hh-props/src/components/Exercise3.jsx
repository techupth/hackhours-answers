import React from "react";

const Article = (props) => {
  return <div className="article">{props.children}</div>;
};

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

  return (
    <div className="container">
      <Article>
        <div className="article-title">Title: {article1.title}</div>
        <div className="article-image">
          Preview Image: <img src={article1.image} />
        </div>
        <div className="article-content">Content: {article1.content}</div>
        <div className="article-author">Author: {article1.author}</div>
      </Article>
      <hr />
      <Article>
        <div className="article-title">Title: {article2.title}</div>
        <div className="article-image">
          Preview Image: <img src={article2.image} />
        </div>
        <div className="article-content">Content: {article2.content}</div>
        <div className="article-author">Author: {article2.author}</div>
      </Article>
    </div>
  );
};

export default Exercise3;
