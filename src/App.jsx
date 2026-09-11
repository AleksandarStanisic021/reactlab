import React from "react";
import Movies from "./comps/Movies";

const App = () => {
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
    <div>
      <Movies />
    </div>
  );
};

export default App;
