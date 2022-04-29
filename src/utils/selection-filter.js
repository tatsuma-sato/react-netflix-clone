export default function selectionFilter({ series, films, test }) {
  return {
    series: [
      {
        title: "Documentraries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: test.filter((item) => item.genres.includes("drama") === true),
      },
      {
        title: "Thriller",
        data: test.filter((item) => item.genres.includes("thriller")),
      },
      {
        title: "Children",
        data: test.filter((item) => item.genres.includes("children")),
      },
      {
        title: "Suspense",
        data: test.filter((item) => item.genres.includes("suspense")),
      },
      {
        title: "Romance",
        data: test.filter((item) => item.genres.includes("romance")),
      },
      {
        title: "Animation",
        data: test.filter((item) => item.genres.includes("animation")),
      },
      {
        title: "Action",
        data: test.filter((item) => item.genres.includes("action")),
      },
      {
        title: "SF",
        data: test.filter((item) => item.genres.includes("science fiction")),
      },
    ],
  };
}
