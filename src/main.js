import API from "./data";
import search from "./components/search.js";
import account from "./components/account.js";
import menu from "./components/menu.js";
import sort from "./components/sort.js";

const AUTHORIZATION = `Basic er883jdzbdw=${Math.random()}`;
const END_POINT = `https://htmlacademy-es-9.appspot.com/cinemaddict/`;
const api = new API({
  endPoint: END_POINT,
  authorization: AUTHORIZATION
});

const doc = document;
const $header = doc.querySelector(`.header`);
const $main = doc.querySelector(`.main`);
const $films = doc.querySelector(`.films`);

const renderBefore = function (inner, target) {
  const element = document.createElement(`template`);
  element.innerHTML = inner();
  target.insertBefore(element.content, $films);
};
const renderAppend = function (inner, target) {
  const element = document.createElement(`template`);
  element.innerHTML = inner();
  target.appendChild(element.content);
};

const renderComponents = () => {
  renderAppend(search, $header);
  renderAppend(account, $header);
  renderBefore(menu, $main);
  renderBefore(sort, $main);

  api.getMovies();
  api.getMoviesExtraLeft();
  api.getMoviesExtraRight();
};


renderComponents();
api.getComments(5);
