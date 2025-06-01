const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const userName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

let user;

fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => {
    user = data.results[0];
  });

let postTitle;

fetch('https://baconipsum.com/api/?type=meat-and-filler')
  .then((response) => response.json())
  .then((data) => {
    postTitle = data[0].slice(0, 30);
  });

let postPara;

fetch(
  'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=2'
)
  .then((response) => response.json())
  .then((data) => {
    postPara = data[0].slice(0, 60);
  });

function getRandomDate() {
  let start = new Date(2020, 0, 1);
  let end = new Date();
  let randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  let options = { month: 'short', day: 'numeric', year: 'numeric' };
  return randomDate.toLocaleDateString('en-US', options);
}

function getData() {
  header.innerHTML = '<img src="https://picsum.photos/500" alt="" />';
  title.innerHTML = `${postTitle}`;
  excerpt.innerHTML = `${postPara}`;
  profileImg.innerHTML = `<img src="${user.picture.large}" alt="" />`;
  userName.innerHTML = `${user.name.first} ${user.name.last}`;
  date.innerHTML = `${getRandomDate()}`;

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgText.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
