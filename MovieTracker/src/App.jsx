import { useState, useEffect } from "react";    
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import AddMovieModal from "./components/AddMovieModal";

function App() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()  => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [])

  return (
    <div>

      <Header onAddMovie={() => setIsModalOpen(true)} />

      <MovieList movies={movies} />

      {isModalOpen && (
       <AddMovieModal 
         setIsModalOpen={setIsModalOpen} 
         movies={movies} 
         setMovies={setMovies} 
          />
      )}
    </div>
  );
}

export default App;
