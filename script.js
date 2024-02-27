const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");

const lowers = document.getElementsByClassName("lower");

radio1.addEventListener("click", (e) => {
  lowers[0].classList.remove("hidden");
  lowers[1].classList.add("hidden");
  lowers[2].classList.add("hidden");
});
radio2.addEventListener("click", (e) => {
  lowers[0].classList.add("hidden");
  lowers[1].classList.remove("hidden");
  lowers[2].classList.add("hidden");
});
radio3.addEventListener("click", (e) => {
  lowers[0].classList.add("hidden");
  lowers[1].classList.add("hidden");
  lowers[2].classList.remove("hidden");
});
