export const fetchMoives = async () => {
  let movieList = [];
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-Us&page=1`
  );
  const data = await response.json();
  data.results.map((item) => {
    const {
      original_title: title,
      poster_path,
      overview: description,
      genre_ids,
      backdrop_path,
    } = item;

    const genres = genre_ids.map((id) => replaceGenre(id));
    const slug = title.toLowerCase().replaceAll(" ", "-");
    let maturity;
    if (genres.includes("animation") === true) {
      maturity = 5;
    } else {
      maturity = Math.floor(Math.random() * (18 - 6) + 6);
    }

    const img = "https://image.tmdb.org/t/p/w500" + poster_path;
    const largeImg = "https://image.tmdb.org/t/p/w500" + backdrop_path;

    movieList.push({
      title,
      slug,
      img,
      description,
      genres,
      largeImg,
      maturity,
    });
  });

  console.log(movieList);
  return movieList;
};

const replaceGenre = (genreId) => {
  switch (genreId) {
    case 28:
      return "action";
    case 12:
      return "adventure";
    case 16:
      return "animation";
    case 35:
      return "comedy";
    case 80:
      return "crime";
    case 99:
      return "documentary";
    case 18:
      return "drama";
    case 10751:
      return "family";
    case 14:
      return "fantasy";
    case 36:
      return "history";
    case 27:
      return "horror";
    case 10402:
      return "music";
    case 9648:
      return "mysery";
    case 10749:
      return "romance";
    case 878:
      return "science fiction";
    case 10770:
      return "TV movie";
    case 53:
      return "thriller";
    case 10752:
      return "war";
    case 10759:
      return "action & adventure";
    case 10762:
      return "kids";
    case 10763:
      return "news";
    case 10764:
      return "reality";
    case 10765:
      return "sci-fi & fantasy";
    case 10766:
      return "soap";
    case 10767:
      return "talk";
    case 10768:
      return "war & politics";
    case 37:
      return "western";
    default:
      return null;
  }
};
