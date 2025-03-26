
import Banner from '../Home/Banner'
import Filter from '../Filter/Filter'
import MoviesList from '../Movies/MoviesList'
import MoviesScroll from '../Movies/MoviesScroll';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../Redux/slice/counterSlice';

function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    console.log(count);
    return (
        <>
            <button onClick={() => dispatch(changeValue())}>+</button>
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