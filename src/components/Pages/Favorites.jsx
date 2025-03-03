import bladeRanner from "../../assets/Blade Runner 2049(2).jpg";
import FavoritesList from "../Favorites/FavoritesList";
import Filter from "../Movies/Filter";
import MoviesList from "../Movies/MoviesList";
import MoviesScroll from "../Movies/MoviesScroll";
function Favorites() {
    return (
        <>
            <div className="favorites__banner">
                <div className="gradient__overlay"></div>
                <img src={bladeRanner} alt="" />
            </div>
            <div className="container">
                <Filter />
                <div className="favorites_movies">
                  <FavoritesList/>
                    <MoviesList />
                </div>
                <MoviesScroll/>
            </div>
        </>
    )
}

export default Favorites