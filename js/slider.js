// Mock Data
const sliderData = [
  {
    nama: "Man vs Bee",
    poster: "./images/manVsBee.jpg",
  },
  {
    nama: "Breaking Bad",
    poster: "./images/breakingBad.jpg",
  },
  {
    nama: "The Rain",
    poster: "./images/theRain.jpg",
  },
  {
    nama: "Life In A Year",
    poster: "./images/lifeInAYear.jpg",
  },
  {
    nama: "Money Heist: Korea",
    poster: "./images/moneyHeistKorea.jpg",
  },
  {
    nama: "Squd Games",
    poster: "./images/squidGames.jpg",
  },
];

const sliderBody = document.getElementsByClassName("slider__body");
const sliderRightBtn = document.getElementById("right__btn");
const sliderLeftBtn = document.getElementById("left__btn");

sliderData.forEach((item) => {
  const sliderItem = document.createElement("img");
  sliderItem.setAttribute("src", item.poster);
  sliderItem.setAttribute("alt", item.name);
  sliderItem.setAttribute("width", "151px");
  sliderItem.setAttribute("height", "210px");
  sliderBody[0].append(sliderItem);
});

sliderRightBtn.onclick = () => {
  gsap.to(sliderBody[0], { duration: 1, right: "-191px" });
  sliderLeftBtn.setAttribute("class", "active");
  sliderRightBtn.setAttribute("class", "disabled");
};
sliderLeftBtn.onclick = () => {
  gsap.to(sliderBody[0], { duration: 1, right: "0" });
  sliderRightBtn.setAttribute("class", "active");
  sliderLeftBtn.setAttribute("class", "disabled");
};
