import React from "react";

const Movies = () => {
  const [movies, setMovies] = React.useState([
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "The Dark Knight", releaseYear: 2008 },
    { id: 3, title: "Interstellar", releaseYear: 2014 },
  ]);
  return (
    <>
      {movies.map((m) => (
        <div key={m.id}>
          <p>Title: {m.title}</p>
          <p>Release Year: {m.releaseYear}</p>

          <button
            type="button"
            onClick={() =>
              setMovies(
                movies.map((movie) =>
                  movie.id === m.id
                    ? { ...movie, title: "Updated Title" }
                    : movie,
                ),
              )
            }>
            Update Title
          </button>
          <button
            type="button"
            onClick={() =>
              setMovies(movies.filter((movie) => movie.id !== m.id))
            }>
            Delete Movie
          </button>
          <button
            type="button"
            onClick={() =>
              setMovies([
                ...movies,
                {
                  id: Date.now(),
                  title: "New Movie",
                  releaseYear: 2020,
                },
              ])
            }>
            Add Movie
          </button>
        </div>
      ))}
    </>
  );
};

export default Movies;
