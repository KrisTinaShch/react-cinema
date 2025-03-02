import MoviesCard from "./MoviesCard";

function MoviesList() {
    let movieName = ["Звездный десант", "Чужой", "Аутсорс", "Бетмен"];
    return (
        <div id="movies" className="movies anchor">
            {movieName.map((item, index) => (
                <MoviesCard key={index} name={item} />
            ))}
        </div>
    )
}

export default MoviesList;