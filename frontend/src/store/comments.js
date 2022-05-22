import { csrfFetch } from './csrf';

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action
// TODO ——————————————————————————————————————————————————————————————————————————————————

const CREATE = "comments/CREATE";
const LOAD = "comments/LOAD";
const UPDATE = "comments/UPDATE";
const DELETE = "comments/DELETE";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Action Creators
// TODO ——————————————————————————————————————————————————————————————————————————————————

const create = (comments) => ({ type: CREATE, comments });
const load = (comments) => ({ type: LOAD, comments });
const update = (comments) => ({ type: UPDATE, comments });
const deleteComment = (id) => ({ type: DELETE, id });

// * ——————————————————————————————————————————————————————————————————————————————————
// *                                    Thunks
// * ——————————————————————————————————————————————————————————————————————————————————

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 CREATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const createComment = (data) => async (dispatch) => {
    const { imageId } = data;

    const response = await csrfFetch(`/api/images/${imageId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const newComment = await response.json();
        dispatch(create(newComment));
        return newComment;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 READ
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const getComment = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`);

    if (response.ok) {
        const comment = await response.json();
        dispatch(load(comment));
        return comment;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 UPDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const updateComment = (data) => async (dispatch) => {
    const { imageId } = data;

    const response = await csrfFetch(`/api/images/:id(\\d+)/comments`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const updatedComment = await response.json();
        dispatch(update(updatedComment));
        return updatedComment;
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 DELETE
// TODO ——————————————————————————————————————————————————————————————————————————————————

export const removeComment = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const commentId = await response.json();
        dispatch(deleteComment(commentId));
    } else {
        const error = await response.json();
        throw error;
    }
}

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 Reducer
// TODO ——————————————————————————————————————————————————————————————————————————————————

const initialState = {};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE: {
            const newState = { ...state };
            newState[action.comments.id] = action.comments;
            return newState;
        }
        case LOAD: {
            const newState = { ...state };
            action.comments.forEach(comment => newState[comment.id] = comment);
            return newState;
        }
        case UPDATE: {
            const newState = { ...state };
            newState[action.comments.id] = action.comments;
            return newState;
        }
        case DELETE: {
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        }
        default:
            return state;
    }
}

export default commentReducer;
