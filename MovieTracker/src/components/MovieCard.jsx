function MovieCard({ movie }) {
    return (
        <div>

<img src={movie.poster} alt={movie.title} />

            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>

        </div>
    );
}
export default MovieCard;