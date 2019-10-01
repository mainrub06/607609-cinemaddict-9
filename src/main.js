import API from "./data";

import {User} from "./objects/user";
import {Search} from "./objects/search";
import {Menu} from "./objects/menu";
import {Sort} from "./objects/sort";

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

const renderComponents = () => {
  const UserEl = new User();
  const SearchEl = new Search();
  const MenuEl = new Menu();
  const SortEl = new Sort();
  MenuEl.render();
  UserEl.render();
  SearchEl.render();
  SortEl.render();
  // add components
  $header.appendChild(SearchEl.element);
  $header.appendChild(UserEl.element);
  $main.insertBefore(MenuEl.element, $films);
  $main.insertBefore(SortEl.element, $films);
  // add film-list
  api.getMovies();
  api.getMoviesExtraLeft();
  api.getMoviesExtraRight();
};

renderComponents();
api.getComments(5);
