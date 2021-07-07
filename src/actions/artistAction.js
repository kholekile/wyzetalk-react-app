import axios from 'axios';
var url = "http://localhost:5000/api/artist/";

export function getInitailData(){
    return dispatch => {
        axios.get(url).then(res => { 
            dispatch(artistData(res.data.results.data));
        }).catch(error => {
            dispatch(errorMessage(error))
        })
    }
}

export function searchAritist(name){
    return dispatch => {
        
        axios.get(`${url}search?name=${name}`).then(res => { 
            dispatch(artistData(res.data.results.data));
        }).catch(error => {
            dispatch(errorMessage(error))
        })
    }
}

export function getArtist(id){
    return dispatch => {

        axios.get(url + id).then(res => {
            dispatch(artist(res.data.results));
        }).catch(error => {
            dispatch(errorMessage(error))
        })
    }
}

export function getAlbums(id){
    return dispatch => {

        axios.get(`${url}${id}/albums`).then(res => {
            dispatch(albums(res.data.results.data));
        }).catch(error => {
            dispatch(errorMessage(error))
        })
    }
}

export function getPopularTracks(id){
    return dispatch => {

        axios.get(`${url}${id}/tracks`).then(res => { 
            dispatch(tracks(res.data.results.data));
        }).catch(error => {
            dispatch(errorMessage(error))
        })
    }
}

export const errorMessage = errorMessage => ({
    type: 'ERROR',
    errorMessage:errorMessage
}) 

export const artistData = artistData => ({
    type: 'GET_ARTISTS_DATA',
    artistData:artistData
})

export const artist = artist => ({
    type: 'GET_ARTIST_DATA',
    artist:artist
})

export const albums = albums => ({
    type: 'GET_ALBUMS_DATA',
    albums:albums
})

export const tracks = tracks => ({
    type: 'GET_TRACKS_DATA',
    tracks:tracks
})

