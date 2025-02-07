export function createPosts() {
  const samplePosts = [
    {
      author: "Michael J.",
      avatar: "../assets/m.png",
      time: "30m",
      content:
        "I tried GroMax, and I have to say, it's the best alternative to Viagra I've ever used. The effects kick in quickly, and I feel more confident than ever before!",
      likes: 147,
      comments: [],
    },
    {
      author: "James L.",
      avatar: "../assets/j.png",
      time: "1d",
      content:
        "Does anyone know of a natural product that can help improve sexual health?",
      likes: 47,
      comments: [
        {
          author: "David W.",
          avatar: "../assets/c.png",
          content:
            "I've always looked for a natural way to improve my health, and GroMax is the perfect choice!",
          time: "5m",
        },
      ],
    },
  ];

  const postsContainer = document.createElement("div");
  postsContainer.className = "posts";

  postsContainer.innerHTML = `
   ${samplePosts
     .map(
       (post) => `
      <div class="post">
        <div class="post-header">
          <img src="${post.avatar}" class="avatar" alt="${post.author}">
          <div class="blockRecomend">
            <div class="blockAuthor">
                <span class="author">${post.author}</span>
                <img src="../assets/recom.png" alt="" />

                <span class="recommended">
                    recommends
                </span>
            </div>
            <div style="display: flex; align-item: center">
                <span class="time">${post.time}</span>
                <img src="../assets/EarthIcon.png" style="widt: 10px heigh: auto" alt="" />
            </div>
          </div>
          
        </div>
        <div class="post-content">${post.content}</div>
        <div class="post-actions">
            <div class="blockReact">
                <div class="blockLikes">
                    <img src="../assets/react.png" alt=""/>
                    <span> You & ${post.likes} others</span>
                </div>
                <div>
                    <span>Comments ${
                      post.comments.length > 0 ? post.comments.length : 0
                    } </span>
                </div>
            </div>
        </div>
        <div class="blockAction">
            <button class="like-btn">
                <img src="../svg/like.svg" alt="" />
                <span>Like</span>     
             </button>
            <button class="comment-btn">
                <img src="../svg/comment.svg" alt="" />
                <span>Comment</span> 
            </button>
            <button class="share-btn">
                <img src="../assets/share.png" alt="" />
                <span>Share</span> 
            </button>
          </div>
        ${post.comments.length > 0 ? renderComments(post.comments) : ""}
      </div>
    `
     )
     .join("")}
`;

  postsContainer.addEventListener("click", (event) => {
    const likeButton = event.target.closest(
      ".like-btn, .comment-btn, .share-btn"
    );
    if (!likeButton) return;

    const blockQuizz = document.querySelector(".blockQuizz");
    if (blockQuizz) {
      blockQuizz.scrollIntoView({ behavior: "smooth" });
    }
  });

  return postsContainer;
}

function renderComments(comments) {
  return `
      <div class="comments">
        ${comments
          .map(
            (comment) => `
          <div class="comment">
            <img src="${comment.avatar}" class="avatar" alt="${comment.author}">
            <div class="comment-body">
              <span class="author">${comment.author}</span>
              <p>${comment.content}</p>
              <span class="time">${comment.time}</span>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
}
