import styles from './styles.module.scss'
import Logo from '../../assets/pngwing.com.png'

interface Props {
    onBlack: boolean
}

export const Header = ({ onBlack }: Props) => {

    return (
        <header className={`${styles.container} ${onBlack ? styles.black : ''}`}>
            <a href="/">
                <img src={Logo} alt="Netflix Logo" />
            </a>
            <div>
                <a href="">
                    <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="usuário" />
                </a>
            </div>
        </header>
    );
}