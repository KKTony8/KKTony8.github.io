var posts=["2025/06/13/About-study/","2025/06/02/my-first-blog/","2025/06/05/Why/","2025/06/12/My-Weekly-Journal/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };