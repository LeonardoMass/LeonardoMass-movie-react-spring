import { ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type Prop = {
    page: MoviePage;
    changePage : Function;
}


function Pagination({page, changePage}: Prop) {

    return (
        <div className="movie-pagination-container">
            <div className="movie-pagination-box">
                <button className="movie-pagination-button" disabled={page.first}  onClick={() => changePage(page.number - 1)}>
                    <Arrow className="movie-pagination-arrow" />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="movie-pagination-button" disabled={page.last}  onClick={() => changePage(page.number + 1)}>
                    <Arrow className="movie-flip-horizontal" />
                </button>
            </div>
        </div>
    );

}
export default Pagination;
