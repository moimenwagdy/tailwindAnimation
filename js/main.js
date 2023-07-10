let btn = document.querySelector(".toggler");
let ulCont = document.querySelector(".nav-list");
let ul = document.querySelector("ul");

let searchBtn = document.querySelector(".sCont");
let anotherToggler = document.querySelector(".ndSearch");
let searchInput = document.querySelector(".search-input");

let htmlEle = document.querySelector("html");
let darkBtn = document.querySelector(".darkBtn");

btn.addEventListener("click", () => {
  ulCont.classList.toggle("hidden");
});

searchBtn.onclick = () => {
  searchInput.classList.toggle("hidden");
  searchInput.classList.toggle("flex");
};
anotherToggler.onclick = () => {
  searchInput.classList.toggle("hidden");
  searchInput.classList.toggle("flex");
};

btninner = () => {
  if (htmlEle.classList.contains("dark")) {
    darkBtn.innerHTML = "Light";
    darkBtn.case = "dark";
  } else {
    darkBtn.innerHTML = "Dark";
    darkBtn.case = "light";
  }
};
createLocalStorage = () => {
  localStorage.setItem("mood", darkBtn.case);
  console.log(localStorage.mood);
};

darkBtn.onclick = () => {
  htmlEle.classList.toggle("dark");
  btninner();
  createLocalStorage();
};

getfromLocal = () => {
  if (localStorage.getItem("mood")) {
    htmlEle.classList.add(localStorage.mood);
  }
};
getfromLocal();
