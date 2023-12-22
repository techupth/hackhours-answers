// 1)
import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  // 2) สร้าง State
  const [postList, setPostList] = useState(postData);

  const likePost = (postIndex) => {
    // 4) เขียน Logic ในการ Update `postList` state
    // [{}, {}]
    // 4.1) Clone array
    const newPostList = [...postList];
    // 4.2) Ressign ตัว Property `likes` ของ Object ตาม index
    newPostList[postIndex].likes = newPostList[postIndex].likes + 1;
    // 4.3) Update ตัว State `postList`
    setPostList(newPostList);
  };

  const dislikePost = (postIndex) => {
    // 5) เขียน Logic ในการ Update `postList` state
    // [{}, {}]
    // 5.1) Clone array
    const newPostList = [...postList];
    // 5.2) Ressign ตัว Property `likes` ของ Object ตาม index
    // ใส่ Conditional Logic เข้าไปครอบ ไม่ให้ Like ติดลบ
    if (newPostList[postIndex].likes > 0) {
      newPostList[postIndex].likes = newPostList[postIndex].likes - 1;
      // 5.3) Update ตัว State `postList`
      setPostList(newPostList);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {/* 3) เอา postList มา Render เป็น List item ด้วย Array.map */}
        {postList.map((post, index) => {
          return (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{post.likes}</span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    likePost(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    dislikePost(index);
                  }}
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
