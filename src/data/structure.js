const dataStructure = {
  LocalComment: {
    "comment": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "emotion": `smile`
  },
  Comment: {
    "id": `42`,
    "author": `Ilya O'Reilly`,
    "comment": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "emotion": `smile` // ["smile", "sleeping", "puke", "angry"]
  },
  Movie: [{// структура данных карточки фильма, конкретно одной, а так их массив
    "id": `0`,
    "comments": [
      Comment.id, Comment.id
    ],
    "film_info": {
      "title": `A Little Pony Without The Carpet`,
      "alternative_title": `Laziness Who Sold Themselves`,
      "total_rating": 5.3,
      "poster": `images/posters/blue-blazes.jpg`,
      "age_rating": 0,
      "director": `Tom Ford`,
      "writers": [
        `Takeshi Kitano`
      ],
      "actors": [
        `Morgan Freeman`
      ],
      "release": {
        "date": 1475924187819,
        "release_country": `Finland`
      },
      "runtime": 77,
      "genre": [
        `Comedy`
      ],
      "description": `Oscar-winning film, a war drama about two young people, from the creators of timeless classic \"Nu, Pogodi!\" and \"Alice in Wonderland\", with the best fight scenes since Bruce Lee.`
    },
    "user_details": {
      "personal_rating": 9,
      "watchlist": false,
      "already_watched": true,
      "watching_date": `2019-05-11T16:12:32.554Z`,
      "favorite": false
    }
  }],
  AuthorizationError: {
    "error": 401,
    "message": `Header Authorization is not correct`
  }
};
