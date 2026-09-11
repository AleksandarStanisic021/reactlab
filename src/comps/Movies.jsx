import React from "react";

const Movies = () => {
  const [movie, setMovie] = React.useState({
    title: "Inception",
    releaseYear: 2010,
  });

  const [movies, setMovies] = React.useState([
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "The Dark Knight", releaseYear: 2008 },
    { id: 3, title: "Interstellar", releaseYear: 2014 },
  ]);
  return (
    <>
      <h1>Hello, World!</h1>
      <p>Title: {movie.title}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <button
        onClick={() =>
          setMovie({ ...movie, title: "The Matrix", releaseYear: 1999 })
        }>
        Change Movie
      </button>
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
