import { ITMDb } from '../../@types/ListHomeDTO';
import { MovieItem } from '../MovieItem';
import styles from './styles.module.scss'

interface Props {
    title: string;
    items: ITMDb;
}

export const MovieList = ({ title, items }: Props) => {

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.container_content}>
                <div className={styles.container_content_list}></div>
                {items.results.length > 0 && items.results.map((item, index) => (
                    <MovieItem key={index} movie={item} />
                ))}
            </div>
        </div>
    );
}