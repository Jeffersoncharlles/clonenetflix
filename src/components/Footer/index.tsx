import styles from './styles.module.scss'

export const Footer = () => {

    return (
        <footer className={styles.container}>
            Feito com <span role="img" arial-label="coração">❤️</span>Pelo JefferDeveloper<br />
            Direitos de imagem para Netflix<br />
            Dados pegos do site TheMovieDb.org
        </footer>
    );
}