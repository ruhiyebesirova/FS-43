function Header({ onAddMovie }) {
    return (

        <div>
            <h1>Movie Tracker</h1>
            <button onClick={onAddMovie}>Add Movie</button>
        </div>
    )
}
export default Header;