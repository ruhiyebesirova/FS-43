import { useState } from "react";

function AddMovieModal({ setIsModalOpen, movies, setMovies }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");

    function addMovie() {

        if (!title || !genre || !year || !poster) {
            alert("Please fill in all fields.")
            return
        }

        const newMovie = {title, genre, year, poster};

        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {
            setMovies([...movies, data]);
            setIsModalOpen(false);
        })
        
    }

    return (
        <div>

            <h2>Add a New Movie</h2>
            <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input placeholder="year" value={year} onChange={(e) => setYear(e.target.value)} />
            <input placeholder="poster" value={poster} onChange={(e) => setPoster(e.target.value)} />

            <button onClick={addMovie}>Add Movie</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>

        </div>
    )
}
export default AddMovieModal;
