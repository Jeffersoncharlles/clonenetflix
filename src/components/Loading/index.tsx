import styles from './styles.module.scss'

export const Loading = () => {

    return (
        <div className={styles.container}>
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
        </div>
    );
}