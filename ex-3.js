////////////////////////
// Ex-3               //
// Start coding here. //
////////////////////////

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push({
      id: this.posts.length + 1,
      title: post.title,
      content: post.content,
      comments: post.comments,
    });
  }

  sharePost(postId) {
    console.log(
      `You've shared post "${this.posts[postId - 1].title}" to your friend.`
    );
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like = this.like + 1;
  }
}

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(comment, post) {
    console.log(
      `Notification: ${comment.createdBy.name} has just commented on this post—"${post.title}".`
    );
  }
}

// สร้าง User
const john = new User(1, "John", "john@gmail.com");

// สร้าง Post List
const postList = new PostList();
// สร้าง Post
const firstPost = new Post(1, "My first post", "This is post content");

// John สร้าง Comment
const firstComment = new Comment(1, "My first comment", john);
// เพิ่ม Like ของ Comment
firstComment.addLike();
firstComment.addLike();
// ดู Like ของ Comment
console.log(firstComment.like);

// เพิ่ม Post เข้าไปใน PostList
postList.addPost(firstPost);

// ดูรายการ Post ทั้งหมด
console.log(postList.posts);

// เพิ่ม Comment เข้าไปใน Post
firstPost.addComment(firstComment);

// Share post ที่ีไอดีเป็น 1
postList.sharePost(1);

// สร้าง Facebook
const facebook = new Facebook();

// สร้าง Page
const firstPage = new FacebookPage("My first page");

// สร้าง Group
const firstGroup = new FacebookGroup("My first group");
// เพิ่ม firstPage เข้าไปใน Facebook
facebook.addPage(firstPage);
// เพิ่ม firstGroup เข้าไปใน Facebook
facebook.addGroup(firstGroup);

// ดูรายการ Facebook Page และ Facebook Group
console.log(facebook.pageList);
console.log(facebook.groupList);

// สร้าง Notification
const notification = new Notification(1);
// ส่ง Notification
notification.send(firstComment, firstPost);
