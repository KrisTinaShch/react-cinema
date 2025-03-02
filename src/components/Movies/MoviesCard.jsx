
import star from "../../assets/icons/star.png";
import imageFilm from "../../assets/ImageFılm.jpg";
function MoviesCard(props) {
    return (
        <a className="movies__card" href="./movie.html">
            <p>
                {props.name}
            </p>
            <div className="movies__card-rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <img src={imageFilm} alt="" />
        </a>
    )
}

export default MoviesCard;