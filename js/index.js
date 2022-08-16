const genres = document.getElementsByClassName("content__genres");
const title = document.getElementsByClassName("content__title");
const info = document.getElementsByClassName("content__info");
const description = document.getElementsByClassName("content__description");
const rate = document.getElementsByClassName("content__rate");
const btns = document.getElementsByClassName("content__actions");
const slider = document.getElementsByClassName("slider");
const ageRating = document.getElementsByClassName("age-rating");
// Just basic animation;
const startAnimation = async () => {
  await gsap.to(genres[0], { duration: 0.2, opacity: 1, transition: ".5s" });
  await gsap.to(title[0], { duration: 0.2, opacity: 1, transition: ".5s" });
  await gsap.to(info[0], { duration: 0.2, opacity: 1, transition: ".5s" });
  await gsap.to(description[0], {
    duration: 0.5,
    opacity: 1,
    transition: ".5s",
  });
  await gsap.to(rate[0], { duration: 0.2, opacity: 1, transition: ".5s" });
  await gsap.to(btns[0], { duration: 0.2, opacity: 1, transition: ".5s" });
  await gsap.to(slider[0], { duration: 0.2, opacity: 1, transition: ".5s" });
  await gsap.to(ageRating[0], { duration: 0.2, opacity: 1, transition: ".5s" });
};

startAnimation();
