import React from "react";

const App = () => {
  const [movie, setMovie] = React.useState({
    title: "Inception",
    releaseYear: 2010,
  });

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Title: {movie.title}</p>
      <p>Release Year: {movie.releaseYear}</p>

      <button
        onClick={() =>
          setMovie({ ...movie, title: "The Matrix", releaseYear: 1999 })
        }>
        Change Movie
      </button>
    </div>
  );
};

export default App;
