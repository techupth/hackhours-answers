import React from "react";

const Article = (props) => {
  return (
    <div className="article">
      <div className="article-title">Title: {props.title}</div>
      <div className="article-image">
        Preview Image: <img src={props.image} />
      </div>
      <div className="article-content">Content: {props.content}</div>
      <div className="article-author">Author: {props.author}</div>
    </div>
  );
};

const Exercise2 = () => {
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
      <Article
        title={article1.title}
        author={article1.author}
        image={article1.image}
        content={article1.content}
      />
      <hr />
      <Article
        title={article2.title}
        author={article2.author}
        image={article2.image}
        content={article2.content}
      />
    </div>
  );
};

export default Exercise2;
