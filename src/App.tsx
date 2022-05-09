import { useEffect, useState } from 'react';
import { IChosenFeatured, ITMDb } from './@types/ListHomeDTO';
import { FeatureMovie } from './components/FeatureMovie';
import { MovieList } from './components/MovieList';
import { Request } from './services/Request';
import styles from './styles.module.scss'

interface IRequest {
  slug: string;
  title: string;
  items: ITMDb;
}

export const App = () => {
  const [movies, setMovies] = useState<IRequest[]>([])
  const [featuredData, setFeaturedData] = useState<IChosenFeatured | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const data = await Request.ListHome()
      if (data) {
        setMovies(data)
      }
      setIsLoading(false)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      if (movies) {
        const originals = movies.filter(slug => slug.slug === 'originals') // filtrando para pegar so originais
        const randomChosen = Math.floor(Math.random() * (originals[0]?.items.results.length - 1)) //pegando um aleatoriamente 
        const chosen = originals[0]?.items.results[randomChosen] // o escolhido e o originals random
        const chosenInfo = await Request.InfoTvShow(chosen?.id, 'tv')
        setFeaturedData(chosenInfo)
      }
    })()
    setIsLoading(false)
  }, [movies])

  return (
    <main className={styles.container}>

      {!isLoading && featuredData && (
        <FeatureMovie item={featuredData} />
      )}

      <section className={styles.container_list}>
        {!isLoading && (
          <>
            {movies.map((item, index) => (
              <MovieList key={index} title={item.title} items={item.items} />
            ))}
          </>
        )}
      </section>
    </main>
  );
}