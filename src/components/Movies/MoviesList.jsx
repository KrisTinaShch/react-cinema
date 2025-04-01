
import MoviesCard from "./MoviesCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux/slice/movieSlice";

function MoviesList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, []);

    const { films } = useSelector((store) => store.movie);
    return (
        <div id="movies" className="movies anchor">
            {films.map((item, index) => (
                <MoviesCard key={index} {...item} />
            ))}
        </div>
    )
}
export default MoviesList;