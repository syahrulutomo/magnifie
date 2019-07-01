export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export const removeMovie = (id) => {
    return {
        type: REMOVE_MOVIE,
        payload: id
    }
}
