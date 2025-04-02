
import MoviesCard from "./MoviesCard";
import SkeletonFilms from "../Skeletons/SkeletonFilm";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux/slice/movieSlice";


function MoviesList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, []);

    const { films, status } = useSelector((store) => store.movie);
    return (
        <div id="movies" className="movies anchor">
            {
                status === 'loading' ? (
                    [...new Array(12)].map((_, index) => <SkeletonFilms key={index} />)


                ) : (
                    films.map((item, index) => (
                        <MoviesCard key={index} {...item} />
                    )))}
        </div>
    )
}
export default MoviesList;