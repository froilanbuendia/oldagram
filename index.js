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

const avatarCourbet = document.getElementById("user-avatar-courbet");
const nameCourbet = document.getElementById("name-courbet");
const userLocationCourbet = document.getElementById("user-location-courbet");
const postImageCourbet = document.getElementById("post-image-courbet");
const likesCourbet = document.getElementById("post-likes-courbet");
const usernameCourbet = document.getElementById("user-name-courbet");

avatarCourbet.src = posts[1].avatar;
nameCourbet.textContent = posts[1].name;
userLocationCourbet.textContent = posts[1].location;
postImageCourbet.src = posts[1].post;
likesCourbet.textContent = `${posts[1].likes} likes`;
usernameCourbet.innerHTML = `${posts[1].username} <span class='comment-text'>${posts[1].comment}</span>`;

const avatarDucreux = document.getElementById("user-avatar-ducreux");
const nameDucreux = document.getElementById("name-ducreux");
const userLocationDucreux = document.getElementById("user-location-ducreux");
const postImageDucreux = document.getElementById("post-image-ducreux");
const likesDucreux = document.getElementById("post-likes-ducreux");
const usernameDucreux = document.getElementById("user-name-ducreux");

avatarDucreux.src = posts[2].avatar;
nameDucreux.textContent = posts[2].name;
userLocationDucreux.textContent = posts[2].location;
postImageDucreux.src = posts[2].post;
likesDucreux.textContent = `${posts[2].likes} likes`;
usernameDucreux.innerHTML = `${posts[2].username} <span class='comment-text'>${posts[2].comment}</span>`;

const likedVangogh = document.getElementById("liked-vangogh");
likedVangogh.addEventListener("dblclick", () => {
  posts[0].likes += 1;
  likesVangogh.textContent = `${posts[0].likes} likes`;
});

const likedCourbet = document.getElementById("liked-courbet");
likedCourbet.addEventListener("dblclick", () => {
  posts[1].likes += 1;
  likesCourbet.textContent = `${posts[1].likes} likes`;
});

const likedDucreux = document.getElementById("liked-ducreux");
likedDucreux.addEventListener("dblclick", () => {
  posts[2].likes += 1;
  likesDucreux.textContent = `${posts[2].likes} likes`;
});
