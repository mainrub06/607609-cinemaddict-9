import {Component} from "./component.js";

export class Card extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._title = data.title;
    this._rate = data.rate;
    this._year = data.release;
    this._time = data.runtime;
    this._genre = data.genres;
    this._img = data.img;
    this._comments = data.commentsCount;
    this._desc = data.description;
    this._alt = data.alt;

    this._element = null;
    this._onDetail = null;
  }

  _callDetail() {
    if (typeof this._onDetail === `function`) {
      this._onDetail();
    }
  }

  set onDetail(fn) {
    this._onDetail = fn;
  }

  bind() {
    this._element.querySelector(`.film-card`).addEventListener(`click`, this._callDetail.bind(this));
  }

  unbind() {
    this._element.querySelector(`.film-card`).removeEventListener(`click`, this._callDetail.bind(this));
  }

  get element() {
    return this._element;
  }

  get template() {
    return /* html*/ `
      <article class="film-card" card_id="${this._id}">
          <h3 class="film-card__title">${this._title}</h3>
          <p class="film-card__rating">${this._rate}</p>
          <p class="film-card__info">
            <span class="film-card__year">${this._year}</span>
            <span class="film-card__duration">${this._time}</span>
            <span class="film-card__genre">${this._genre}</span>
          </p>
          <img src="./${this._img}" alt="${this._alt}" class="film-card__poster">
          <p class="film-card__description">${this._desc}</p>
          <a class="film-card__comments">${this._comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
      </article>
    `;
  }

}
