
import { Link } from 'react-router-dom';
import star from "../../assets/icons/star.png";
function MoviesCard(props) {
    console.log(props)
    return (
        <Link className="movies__card" to={`/movie/${props.id}`}>
            <p>
                {props.title}
            </p>
            <div className="movies__card-rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <img src={props.imageUrl} alt="" />
        </Link>
    )
}

export default MoviesCard;