import { useContext} from "react";
import MoviesCard from "./MoviesCard";
import { FilmsContext } from "../../App";

function MoviesList() {
    const films = useContext(FilmsContext);
    
    return (
        <div id="movies" className="movies anchor">
            {films.map((item, index) => (
                <MoviesCard key={index} {...item} />
            ))}
        </div>
    )
}

export default MoviesList;