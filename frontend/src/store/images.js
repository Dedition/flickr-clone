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
const deleteImage = (images) => ({ type: DELETE, images });

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Thunks
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const uploadImage = (data) => async (dispatch) => {
    const { name, content, userId, image } = data;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('content', content);
    formData.append('userId', userId);

    if (!image) dispatch(create(null))
    else formData.append('image', image);

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

export const deleteImageAction = (imageId) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${imageId}`, {
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
            delete newState[action.images];
            return newState;
        default:
            return state;
    }
}

export default imageReducer;
