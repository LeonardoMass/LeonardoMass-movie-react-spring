
import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';
import Select from 'react-select'
type Prop = {
    page: MoviePage;
    changePage: Function;
    changeSort: Function;
}


//onSelect = {() => changeSort("score,desc")}
//const score = (event.target as any).score.value;

function Pagination({ page, changePage, changeSort }: Prop) {

    return (
        <div className="movie-pagination-container">
            <div className="movie-pagination-box">
                <button className="movie-pagination-button" disabled={page.first} onClick={() => changePage(page.number - 1)}>
                    <Arrow className="movie-pagination-arrow" />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="movie-pagination-button" disabled={page.last} onClick={() => changePage(page.number + 1)}>
                    <Arrow className="movie-flip-horizontal" />
                </button>
            </div>

            <form >
                <div className="sort-pagination-group">
                    <label className="sort-pagination-group-select" htmlFor="score">Ordenar por </label>
                    <select onChange={(e) => changeSort(e.target.value)}>
                        <option value="count,desc">Votos</option>
                        <option value="score,desc">Avaliações</option>
                        <option value="title">Título</option>
                    </select>
                </div>
            </form >
        </div>

    );

}
export default Pagination;
