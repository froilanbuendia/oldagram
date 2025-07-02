const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const avatarVangogh = document.getElementById("user-avatar-vangogh");
const nameVangogh = document.getElementById("name-vangogh");
const userLocationVangogh = document.getElementById("user-location-vangogh");
const postImageVangogh = document.getElementById("post-image-vangogh");
const likesVangogh = document.getElementById("post-likes-vangogh");
const usernameVangogh = document.getElementById("user-name-vangogh");

avatarVangogh.src = posts[0].avatar;
nameVangogh.textContent = posts[0].name;
userLocationVangogh.textContent = posts[0].location;
postImageVangogh.src = posts[0].post;
likesVangogh.textContent = `${posts[0].likes} likes`;
usernameVangogh.innerHTML = `${posts[0].username} <span class='comment-text'>${posts[0].comment}</span>`;
