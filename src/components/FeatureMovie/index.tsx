import { IChosenFeatured } from '../../@types/ListHomeDTO';
import styles from './styles.module.scss'


interface Props {
    item: IChosenFeatured | null
}

export const FeatureMovie = ({ item }: Props) => {
    console.log(item)

    const firstDate = new Date(String(item?.first_air_date))

    let description = item?.overview;
    if (String(description)?.length > 150) {
        description = description?.substring(0, 150) + '...'
    }

    return (
        <section className={styles.container}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                background: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`,
            }}
        >
            <div className={styles.feature}>
                <div className={styles.feature_container}>
                    <h2>{item?.original_name}</h2>
                    <div className={styles.feature_container_info}>
                        <span>{item?.vote_average} pontos</span>
                        <time> {firstDate.getFullYear()}</time>
                        <strong> {item?.number_of_seasons} temporada{item?.number_of_seasons !== 1 ? 's' : ''}</strong>
                    </div>
                    <p>{description}</p>
                    <div className={styles.feature_container_btn}>
                        <button className={styles.feature_container_btn_play}>► Assistir</button>
                        <button className={styles.feature_container_btn_list}>+ Minha lista</button>
                    </div>
                    <div className={styles.feature_container_genres}>
                        <strong>Gêneros:</strong> {item?.genres.map((item, index) => (<span key={index}>{item.name} </span>))}
                    </div>
                </div>
            </div>
        </section>
    );
}