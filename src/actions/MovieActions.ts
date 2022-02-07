import { get } from "./api"
import { GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_FAILD, BASE_URL, API_KEY } from "./types"


export function getMovies(query: string) {
    return (dispatch: any) => {
        get(
            BASE_URL.concat(`SearchMovie/${API_KEY}/${query}`),
            dispatch,
            GET_MOVIES_START,
            GET_MOVIES_SUCCESS,
            GET_MOVIES_FAILD,
        )
    }
}