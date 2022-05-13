import { ITMDb } from '../../@types/ListHomeDTO';
import { MovieItem } from '../MovieItem';
import styles from './styles.module.scss'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/all'
import { useState } from 'react';

interface Props {
    title: string;
    items: ITMDb;
}

export const MovieList = ({ title, items }: Props) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let valorXScroll = scrollX + Math.round(window.innerHeight / 2);
        //dinâmico pegando a metade da tela e dividindo por 2 e arredondando
        //fixo 150 e o valor de cada vez que eu clico
        if (valorXScroll > 0) {
            //limitar para ser 0
            valorXScroll = 0
        }

        setScrollX(valorXScroll)
    }

    const handleLeftRight = () => {
        let valorXScroll = scrollX - Math.round(window.innerHeight / 2);
        //dinâmico pegando a metade da tela e dividindo por 2 e arredondando
        //fixo 150 e o valor de cada vez que eu clico

        let ListWidth = items.results.length * 160 //vezes a largura de cada item
        if ((window.innerWidth - ListWidth) > valorXScroll) {
            //tamanho da tela  menos o tamanho de quantidade de itens 
            // e maior que o valor do scroll
            // se sim scroll atual e o tamanho da tela menos o item menos 60 de padding
            valorXScroll = (window.innerWidth - ListWidth) - 60 //60 e do padding de cada lado
        }
        setScrollX(valorXScroll)
    }

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.container_left} onClick={handleLeftArrow}>
                <MdNavigateBefore size={50} />
            </div>
            <div className={styles.container_right} onClick={handleLeftRight}>
                <MdNavigateNext size={50} />
            </div>
            <div className={styles.container_content}>
                <div className={styles.container_content_list} style={{
                    marginLeft: scrollX,
                    width: items.results.length * 160 //tamanho de acordo com a quantidade
                }}>
                    {items.results.length > 0 && items.results.map((item, index) => (
                        <MovieItem key={index} movie={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}