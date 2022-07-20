import { csrfFetch } from './csrf';

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action
// TODO ——————————————————————————————————————————————————————————————————————————————————
const CREATE = "images/CREATE";
const LOAD = "images/LOAD";
const UPDATE = "images/UPDATE";
const DELETE = "images/DELETE";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action Creators
// TODO ——————————————————————————————————————————————————————————————————————————————————

const create = (images) => ({ type: CREATE, images });
const load = (images) => ({ type: LOAD, images });
const update = (images) => ({ type: UPDATE, images });
const deleteImage = (id) => ({ type: DELETE, id });

// * ——————————————————————————————————————————————————————————————————————————————————
// *                                 Thunks
// * ——————————————————————————————————————————————————————————————————————————————————

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 CREATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const uploadImage = (data) => async (dispatch) => {
    const { name, content, userId, location, image } = data;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    formData.append('userId', userId);
    formData.append('location', location);

    formData.append('image', image);
    // if (!image) dispatch(create(null))
    // else

    const response = await csrfFetch('/api/images', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });

    if (response.ok) {
        const newImage = await response.json();
        dispatch(create(newImage));
        return newImage;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 READ
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const getImages = () => async (dispatch) => {
    const response = await csrfFetch('/api/images');

    if (response.ok) {
        const images = await response.json();
        dispatch(load(images));
        return images;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 UPDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const editImage = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const images = await response.json();
        dispatch(update(images));
        return images;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 DELETE
// TODO ——————————————————————————————————————————————————————————————————————————————————
export const deleteImageAction = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        const deletedImageId = await response.json();
        dispatch(deleteImage(deletedImageId));
        return deletedImageId;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Reducer
// TODO ——————————————————————————————————————————————————————————————————————————————————

const initialState = {};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            const newImage = {};
            newImage[action.images.id] = action.images;
            return { ...state, ...newImage };

        case LOAD:
            const allImages = {};
            action.images.forEach(image => allImages[image.id] = image);
            return { ...state, ...allImages };

        case UPDATE:
            const updatedImages = {
                ...state,
                [action.images.id]: action.images
            };
            return updatedImages;

        case DELETE:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default imageReducer;
