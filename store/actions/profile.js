import React from 'react';

export const ADD_TO_LIKE = 'LIKE';

export const likeAction = (id) => {
    return {
        type: ADD_TO_LIKE,
        id
    }
}