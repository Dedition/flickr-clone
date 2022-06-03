import { csrfFetch } from './csrf';

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action
// TODO ——————————————————————————————————————————————————————————————————————————————————

const ADD = "ALBUMS/ADD";
const LOAD = "ALBUMS/LOAD";
const UPDATE = "ALBUMS/UPDATE";
const DELETE = "ALBUMS/DELETE";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action Creators
// TODO ——————————————————————————————————————————————————————————————————————————————————

const add = (image) => ({ type: ADD, image });
const load = (likedImage) => ({ type: LOAD, likedImage });
const update = (images) => ({ type: UPDATE, images });
const deleteAlbum = (imageId) => ({ type: DELETE, imageId });

// *    ——————————————————————————————————————————————————————————————————————————————————
// *                                    Thunks
// *    ——————————————————————————————————————————————————————————————————————————————————

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 CREATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const addAlbum = (userId, imageId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/images/${imageId}/album`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const newAlbum = await response.json();
        // console.log(newAlbum.image);
        dispatch(add(newAlbum.image));
        // return newAlbum;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 READ
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const getAlbum = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/images`);
    if (response.ok) {
        const addedImages = await response.json();
        dispatch(load(addedImages));
        return addedImages;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 UPDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const updateAlbum = (userId, imageId, data) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/images/${imageId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const updatedAlbum = await response.json();
        dispatch(update(updatedAlbum.image));
        return updatedAlbum;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 DELETE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const removeAlbum = (userId, imageId) => async (dispatch) => {
    console.log('entered Remove Album')
    // /:userId/images/:imageId/album
    const response = await csrfFetch(`/api/users/${userId}/images/${imageId}/album`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedAlbum = await response.json();
        dispatch(deleteAlbum(deletedAlbum.id));
        return deletedAlbum;
    } else {
        const error = await response.json();
        throw error;
    }
}

// * ——————————————————————————————————————————————————————————————————————————————————
// *                                    Reducer
// * ——————————————————————————————————————————————————————————————————————————————————

const initialState = {};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                [action.image.id]: action.image
            }
        }
        case LOAD: {
            const allLikedImages = {};
            // console.log(action)
            action.likedImage.images.forEach(image => {
                allLikedImages[image.id] = image;
            });
            return {
                ...state,
                ...allLikedImages
            }
        }
        case UPDATE: {
            const updatedImages = {};
            action.images.forEach(image => {
                updatedImages[image.id] = image;
            });
            return {
                ...state,
                ...updatedImages
            }
        }
        case DELETE: {
            const newState = { ...state };
            delete newState[action.imageId];
            return newState;
        }
        default:
            return state;
    }
}

export default albumReducer;
