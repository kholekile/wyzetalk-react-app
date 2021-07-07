const initialState = [];

export function artistsData(state = initialState , action){
    switch (action.type) {
        case 'GET_ARTISTS_DATA':
            return action.artistData ? action.artistData : state;
        default:
            return state
    }
}

export function artistData(state = initialState , action){
    switch (action.type) {
        case 'GET_ARTIST_DATA':
            return action.artist ? action.artist : state;
        default:
            return state
    }
}

export function ablumsData(state = initialState , action){
    switch (action.type) {
        case 'GET_ALBUMS_DATA':
            return action.albums ? action.albums : state;
        default:
            return state
    }
}

export function tracksData(state = initialState , action){
    switch (action.type) {
        case 'GET_TRACKS_DATA':
            return action.tracks ? action.tracks : state;
        default:
            return state
    }
}