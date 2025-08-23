import React, { useEffect, useState } from 'react'
import type { Movie } from '../../../types'
import { api } from '../../../services/api'

const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function loadMovies() {
            try{
                setIsLoading(true)

                const data = await api.getMovies()
                setMovies(data)
            }catch(err) {
                setError(err as Error)
            } finally {
                setIsLoading(false)
            }
        }
        loadMovies()
    }, [])

  return {movies, isLoading, error}
}

export default useMovies
