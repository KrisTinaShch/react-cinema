
import star from "../../assets/icons/star.png";
function MoviesCard(props) {
    return (
        <a className="movies__card" href="./movie.html">
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
        </a>
    )
}

export default MoviesCard;