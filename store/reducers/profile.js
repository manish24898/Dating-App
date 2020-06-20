import {PROFILES, LIKES} from '../../data/dummy-data';
import {ADD_TO_LIKE} from '../actions/profile';

const initialState = {
    profiles : PROFILES.filter(profile => profile.id !== 'u1'),
    likes:PROFILES.find(item => item.id === 'u1').likes,     //likes of our user
    //maybe handle rejections also later
}

export const reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case ADD_TO_LIKE:
            return {
                ...state,
                likes:[...state.likes, action.id]
            }
    }
    return state;
}