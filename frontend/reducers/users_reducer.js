import {
    RECEIVE_USERS,
    RECEIVE_USER,
    REMOVE_USER
} from '../actions/user_actions';

export const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.users);
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case REMOVE_USER:
            let newState = Object.assign({}, state);
            delete newState[action.user.id];
            return newState;
        default:
            return state;
    }
}