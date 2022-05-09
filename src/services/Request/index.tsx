import { api } from "../../libs/api"

/*
- originais 
- recomendados (trending)
- em alta (top rated)
- ação
- comedia 
- terror 
- romance
- documentários
- series (trending)
*/
const basic = async (url: string) => {
    const { data } = await api.get(url, {})
    if (data) {
        return data
    }
}

const key = import.meta.env.VITE_API_KEY_V3

export const Request = {
    ListHome: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basic(`discover/tv?with_networks=213&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basic(`trending/all/week?language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basic(`movie/top_rated?language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basic(`discover/movie?with_genres=28&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basic(`discover/movie?with_genres=35&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basic(`discover/movie?with_genres=27&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basic(`discover/movie?with_genres=10749&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basic(`discover/movie?with_genres=99&language=pt-BR&api_key=${key}`)
            },
        ]
    }
}