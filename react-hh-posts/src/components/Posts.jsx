import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [posts, setPosts] = useState(postData);

  function handleLike(postIndex) {
    let newPosts = [...posts];
    newPosts[postIndex].likes = newPosts[postIndex].likes + 1;
    setPosts(newPosts);
  }

  function handleDislike(postIndex) {
    let newPosts = [...posts];
    // ใส่ conditional logic เพิ่มเข้าไปเพื่อไม่ให้ like เป็นเลขติดลบ
    if (newPosts[postIndex].likes !== 0) {
      newPosts[postIndex].likes = newPosts[postIndex].likes - 1;
      setPosts(newPosts);
    }
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((item, index) => {
          return (
            <div className="post-item" key={item.id}>
              <div className="post-header">
                <h2>Post Title #{item.id}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => handleLike(index)}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => handleDislike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
