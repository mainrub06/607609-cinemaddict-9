import search from "./components/search.js";
import account from "./components/account.js";
import menu from "./components/menu.js";
import sort from "./components/sort.js";
import films from "./components/films.js";

const doc = document;
const $header = doc.querySelector(`.header`);
const $main = doc.querySelector(`.main`);

const renderHTML = function (inner, target) {
  const element = document.createElement(`template`);
  element.innerHTML = inner();
  target.appendChild(element.content);
};

const renderComponents = () => {
  renderHTML(search, $header);
  renderHTML(account, $header);
  renderHTML(menu, $main);
  renderHTML(sort, $main);
  renderHTML(films, $main);
};

renderComponents();
