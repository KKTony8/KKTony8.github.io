var posts=["2025/06/05/Why/","2025/06/02/my-first-blog/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };