import { ListHomeDTO } from '../../@types/ListHomeDTO';
import styles from './styles.module.scss'

interface Props {
    movie: ListHomeDTO
}

export const MovieItem = ({ movie }: Props) => {

    return (
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        </div>
    );
}