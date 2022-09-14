import MovieStars from "components/MovieStars";
import { Movie } from "types/movie";
import './styles.css';

type Props = {
    movie: Movie;
}


function MovieScore({movie}: Props) {

    

    return (
        <div className="movie-score-container">
        <p className="movie-score-value">{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
        <MovieStars score={movie.score}/>
        <p className="movie-score-count">{movie.count} avaliações</p>
    </div>
    );
}

export default MovieScore;