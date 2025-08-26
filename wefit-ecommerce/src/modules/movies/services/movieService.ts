import { apiClient } from "../../../services/api";
import type { Movie } from "../../../types";

async function getMovies(): Promise<Movie[]> {
    try{
        const response = await apiClient.get('/movies') 
        return response.data.products
    }
    catch (error) { 
        throw error
    }
}

export const api = {
    getMovies
}