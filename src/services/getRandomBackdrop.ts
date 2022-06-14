const approvedMoviesArr = [
  [
    "The Passion of Joan of Arc",
    1928,
    [
      "/A1mteOfKdvK5er2sD5i02Qw3CWz.jpg",
      "/wmmrw1ORWTpbLi5Ha5UgyFLW2tZ.jpg",
      "/iwXyLqVNaMJ4R97M7fNQzCWyVxG.jpg",
      "/ozDJWv5KNQ3s64EWOYt759jmUWE.jpg",
    ],
  ],
  [
    "Fight Club",
    1999,
    [
      "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
      "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      "/ruJPyRrHYPS071XzVGPX3peYi0x.jpg",
      "/bsfJoKVAqFzlhvbt8AffjvYAtN4.jpg",
      "/3nv2TEz2u178xPXzdKlZdUh5uOI.jpg",
    ],
  ],
  [
    "Come and See",
    1985,
    [
      "/oIQMt3Q6Qa37YD0JOdYkrIAPYDk.jpg",
      "/59Mm7pdeuonkRSVnAvUVL9HGjs9.jpg",
      "/x3N02d7xXL8CgQXDgsHf3Lafgg7.jpg",
      "/6C1U0cKK5zGjyUSwNc5GLSVCr7Y.jpg",
    ],
  ],
  [
    "A Man Escaped",
    1956,
    ["/yEbJs6ZLURFgAFvS8EeNrYovYHa.jpg", "/xRrseSG0qCK8CFQu4vDVoV9cqO9.jpg"],
  ],
  [
    "Stalker",
    1979,
    [
      "/6yrbWzzrPp7pwz6zHdifspJk8t3.jpg",
      "/xhet9FxP6VoRdlBSsfc9FhCsKSW.jpg",
      "/jwrmtU1QxbSXZMyUpmGnXBL87Fq.jpg",
      "/9dDN9XYbTEyaR0mbeQVMpPxlsNo.jpg",
    ],
  ],
  [
    "Drive",
    2011,
    [
      "/9ly9pxGwiB6g5lIZXou2HKXl7ua.jpg",
      "/3jZ7aGtq2x1xTe9KjiCyewZAlRH.jpg",
      "/xzLycwNMkF2eci7AM8LRUStTHfm.jpg",
      "/oeEiUwvqHxWT0XqD3YlViaiJOVD.jpg",
    ],
  ],
  [
    "La Haine",
    1995,
    ["/b2hLlrD7abdMx3yxG8ODPUYbBV3.jpg", "/movqyWQUVQvR1xzWmnVIMmhMgDP.jpg"],
  ],
  [
    "Taxi Driver",
    1976,
    [
      "/a58oc5qGNazb3QOxEH8eG5S7gjr.jpg",
      "/orjyEE9ZcMefTsN8zT5ryQTdkIz.jpg",
      "/6aoyUbvu0419XLKLIMoH0TkEicH.jpg",
      "/5MVSXJieOhbyZudCnV1H4YJpfPV.jpg",
    ],
  ],
  [
    "The Lighthouse",
    2019,
    [
      "/tNE9HGcFOH8EpCmzO7XCYwqguI0.jpg",
      "/bM9Dn5Fx89YeYJVbM59xnpgTm8p.jpg",
      "/r4uBaF8VCdIcEp38jUpdxKP8eLJ.jpg",
      "/fVzSBKQL7oqfq7QsH1rVKymaSQe.jpg",
    ],
  ],
  [
    "Blade Runner 2049",
    2017,
    [
      "/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
      "/iqZWmj1Ifz4T5tuCuszWktUG5yX.jpg",
      "/uKbX1ha7KWyTecvpPpRCB3iFfj3.jpg",
      "/uAB92wfh19oBxwRePGxzCDk5LfL.jpg",
      "/4eU36qkOYZwgv0qL911jhlsOBZU.jpg",
    ],
  ],
];

const rand = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getRandApprovedData = () => {
  const randMovie = approvedMoviesArr[rand(approvedMoviesArr.length)];
  const randMovieData = randMovie.map((elem) =>
    typeof elem === "object" ? elem[rand(elem.length)] : elem
  );
  return {
    title: randMovieData[0],
    year: randMovieData[1],
    backdropUrl: randMovieData[2],
  };
};
