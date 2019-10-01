import {
  PageController
} from "./pageController";

const getController = (data) => {
  const Controller = new PageController(data);
  Controller.render();
  document.querySelector(`.main`).appendChild(Controller.element);
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
  }

  getController() {
    return this._load({
        url: `movies`
      })
      .then(toJSON)
      .then(parseDataDetail)
      .then(getController);
  }

  getComments(id) {
    return this._load({
        url: `comments/${id}`
      })
      .then(toJSON)
      .then(parseComments)
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
