import axios from 'axios';

export const FETCH_IMAGE_START = 'FETCH_IMAGE_START';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';

// async action creator

let data = {
    url: "http://api.pexels.com/v1/search?query=example+query&per_page=15&page=1",
    headers: {
        'Authorization': '563492ad6f917000010000018d78f362386242ee8e7f6f6dd96460f8'
    }
}

export const getImage = () => dispatch => {
    dispatch({ type: FETCH_IMAGE_START });
    axios
    .get(data.url(this.headers))
    .then(response => {
        console.log(response);
        dispatch({type: FETCH_IMAGE_SUCCESS, payload: response.data.page});
    })
    .catch(error => {
        dispatch({type: FETCH_IMAGE_FAILURE, payload: error.response})
    });   
};