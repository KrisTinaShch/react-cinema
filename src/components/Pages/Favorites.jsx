import FavoritesList from "../Favorites/FavoritesList";
import Banner from "../Favorites/Banner";
import Filter from "../Filter/Filter";
import MoviesList from "../Movies/MoviesList";
import MoviesScroll from "../Movies/MoviesScroll";
function Favorites() {
    return (
        <>
            <Banner />
            <div className="container">
                <Filter />
                <div className="favorites_movies">
                    <FavoritesList />
                    <MoviesList />
                </div>
                <MoviesScroll />
            </div>
        </>
    )
}

export default Favorites