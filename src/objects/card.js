import Component from "../objects/component";

export class card extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._title = data.title;
    this._rate = data.rate;
    this._year = data.year;
    this._time = data.time;
    this._genre = data.genre;
    this._img = data.img;
    this._comments = data.comments;
    this._description = data.desc;
    this._alt = data.alt;

    this._element = null;
    this._onEdit = null;
  }

  _callDetail() {
    return ``;
  }

  bind() {
    this._element.addEventListener(`click`, this._callDetail.bind(this));
  }

  unbind() {
    this._element.removeEventListener(`click`, this._callDetail.bind(this));
  }

  get element() {
    return this._element;
  }

  template() {
    return /* html*/ `
      <article class="film-card" card_id="${this.__id}">
          <h3 class="film-card__title">${this.__title}</h3>
          <p class="film-card__rating">${this.__rate}</p>
          <p class="film-card__info">
            <span class="film-card__year">${this.__year}</span>
            <span class="film-card__duration">${this.__time}</span>
            <span class="film-card__genre">${this.__genre}</span>
          </p>
          <img src="./${this.__img}" alt="${this.__alt}" class="film-card__poster">
          <p class="film-card__description">${this.__desc}</p>
          <a class="film-card__comments">${this.__comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
      </article>
    `;
  }

}
