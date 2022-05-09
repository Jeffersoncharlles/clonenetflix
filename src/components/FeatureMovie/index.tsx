import { IChosenFeatured } from '../../@types/ListHomeDTO';
import styles from './styles.module.scss'

interface Props {
    item: IChosenFeatured | null
}

export const FeatureMovie = ({ item }: Props) => {
    console.log(item)

    return (
        <section className={styles.container}

            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                background: `url(https://image.tmdb.org/t/p/original${item?.poster_path})`,
            }}
        >


            <div className={styles.feature}>
                <div className={styles.feature_container}>
                    <h2>{item?.original_name}</h2>
                    <div className={styles.feature_container_info}>
                        <span>{item?.vote_average} pontos</span>
                        <time>2999</time>
                        <strong> {item?.number_of_seasons} temporada{item?.number_of_seasons !== 1 ? 's' : ''}</strong>
                    </div>
                    <p>{item?.overview}</p>
                    <div className={styles.feature_container_btn}>
                        <button></button>
                        <button></button>
                    </div>
                    <div className={styles.feature_container_genres}>
                        <strong>Gêneros:</strong><span> ....</span>
                    </div>
                </div>
            </div>
        </section>
    );
}