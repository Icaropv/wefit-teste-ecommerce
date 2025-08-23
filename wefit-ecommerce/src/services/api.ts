import axios from "axios";
import type { Movie } from "../types";

const apiClient = axios.create({
    baseURL: 'https://wefit-movies.vercel.app/api'
})

async function getMovies(): Promise<Movie[]> {
    try{
        const response = await apiClient.get('/movies')
        console.log(response);
        
        return response.data.products
    }
    catch (error) {
        console.error("Erro ao buscar filmes: ", error)
        throw error
    }
}

export const api = {
    getMovies
}