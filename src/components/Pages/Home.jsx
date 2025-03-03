
import Banner from '../Home/Banner'
import Filter from '../Filter/Filter'
import MoviesList from '../Movies/MoviesList'
import MoviesScroll from '../Movies/MoviesScroll';

function Home() {
    return (
        <>
            <Banner />
            <div className="container">
                <Filter />
                <MoviesList />
                <MoviesScroll />
            </div>
        </>
    )
}

export default Home;