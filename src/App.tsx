import { useEffect, useState } from 'react';
import { ITMDb } from './@types/ListHomeDTO';
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

  return (
    <main className={styles.container}>
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