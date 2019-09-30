import cardDetail from "./components/card_detail.js";

import {
  Card
} from "./objects/card.js";
import {
  CardDetail
} from "./objects/cardDetail.js";
import {
  removeElement
} from "./utils.js";


const doc = document;
const $moviesSimple = doc.querySelector(`.films-list .films-list__container`);
const $moviesExtra = doc.querySelectorAll(`.films-list--extra .films-list__container`);
const $body = doc.querySelector(`body`);

const renderCards = (data) => {
  for (let i = 0; i < 5; i++) {
    const component = new Card(data[i]);
    const componentDetail = new CardDetail(data[i]);
    component.render();
    $moviesSimple.appendChild(component.element);

    component.onDetail = () => {
      componentDetail.render();
      $body.appendChild(componentDetail.element);
    };

    componentDetail.onClose = () => {
      // componentDetail.unrender();
      removeElement(`.film-details`);
    };
    componentDetail.onEsc = () => {
      // componentDetail.unrender();
      removeElement(`.film-details`);
    };
  }

  const btn = doc.createElement(`template`);
  btn.innerHTML = `<button class="films-list__show-more">Show more</button>`;
  $moviesSimple.appendChild(btn.content);
};

const renderCardsExtraOne = (data) => {
  for (let i = 0; i < 2; i++) {
    const component = new Card(data[i]);
    const componentDetail = new CardDetail(data[i]);
    component.render();
    $moviesExtra[0].appendChild(component.element);

    component.onDetail = () => {
      componentDetail.render();
      $body.appendChild(componentDetail.element);
    };

    componentDetail.onClose = () => {
      // componentDetail.unrender();
      removeElement(`.film-details`);
    };
  }
};
const renderCardsExtraTwo = (data) => {
  for (let i = 0; i < 2; i++) {
    const component = new Card(data[i]);
    const componentDetail = new CardDetail(data[i]);
    component.render();
    $moviesExtra[1].appendChild(component.element);

    component.onDetail = () => {
      componentDetail.render();
      $body.appendChild(componentDetail.element);
    };

    componentDetail.onClose = () => {
      // componentDetail.unrender();
      removeElement(`.film-details`);
    };
  }
};

const toJSON = (response) => {
  return response.json();
};

const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`,
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const consoleW = (response) => {
  return console.log(response);
};

const parseComments = (data) => {
  return data.map((it) => {
    return {
      id: it.id,
      author: it.author,
      comment: it.comment,
      date: it.date,
      emotion: it.emotion
    };
  });
};

const renderCardDetail = (data) => {
  const template = doc.createElement(`template`);
  template.innerHTML = cardDetail(data);
  template.content.querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    doc.querySelector(`.film-details`).remove();
  });
  $body.appendChild(template.content);
};


const events = (data) => {

  doc.querySelectorAll(`.film-card`).forEach((element) => {
    element.addEventListener(`click`, function () {
      const that = this;
      const id = that.getAttribute(`card_id`).toString();
      const search = data.find((name) => {
        return name.id === id;
      });
      renderCardDetail(search);
    });
  });

};
const parseDataDetail = (data) => {
  return data.map((it) => {
    return {
      id: it.id,
      img: it.film_info.poster,
      alt: it.film_info.alternative_title,
      age: it.film_info.age_rating,
      title: it.film_info.title,
      rate: it.film_info.total_rating,
      director: it.film_info.director,
      writers: it.film_info.writers,
      actors: it.film_info.actors,
      release: it.film_info.release.date,
      runtime: it.film_info.release.date,
      country: it.film_info.release.release_country,
      genres: it.film_info.genre[0],
      description: it.film_info.description,
      comments: it.comments[0],
      commentsCount: it.comments.length
    };
  });
};


export default class API {
  constructor({
    endPoint,
    authorization
  }) {
    this._endPoint = endPoint;
    this._authorization = authorization;
    this._getDetailMovie = this.getDetailMovie.bind(this);
  }

  getDetailMovie() {
    return this._load({
        url: `movies`
      })
      .then(toJSON)
      .then(parseDataDetail)
      .then(events);
  }

  getMovies() {
    return this._load({
        url: `movies`
      })
      .then(toJSON)
      // .then(consoleW)
      .then(parseDataDetail)
      .then(renderCards);
  }
  getMoviesExtraLeft() {
    return this._load({
        url: `movies`
      })
      .then(toJSON)
      .then(parseDataDetail)
      .then(renderCardsExtraOne);
  }
  getMoviesExtraRight() {
    return this._load({
        url: `movies`
      })
      .then(toJSON)
      .then(parseDataDetail)
      .then(renderCardsExtraTwo);
  }
  getComments(id) {
    return this._load({
        url: `comments/${id}`
      })
      .then(toJSON)
      .then(consoleW);
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    headers.append(`Authorization`, this._authorization);

    return fetch(`${this._endPoint}/${url}`, {
        method,
        body,
        headers
      })
      .then(checkStatus)
      .catch((err) => {
        window.console.error(`fetch error: ${err}`);
        throw err;
      });
  }
}
