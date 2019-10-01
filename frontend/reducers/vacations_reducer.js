import {
    RECEIVE_VACATIONS,
    RECEIVE_VACATION,
    REMOVE_VACATION
} from '../actions/vacation_actions';

export const VacationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VACATIONS:
            return Object.assign({}, action.vacations);
        case RECEIVE_VACATION:
            return Object.assign({}, state, { [action.vacation.id]: action.vacation })
        case REMOVE_VACATION:
            let newState = Object.assign({}, state);
            delete newState[action.vacation.id];
            return newState;
        default:
            return state;
    }
}