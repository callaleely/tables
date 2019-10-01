import * as ApiUtil from '../utils/vacation_api_util';

export const RECEIVE_VACATIONS = "RECEIVE_VACATIONS";
export const RECEIVE_VACATION = "RECEIVE_VACATION";
export const REMOVE_VACATION = "REMOVE_VACATION";

export const fetchVacations = () => dispatch => (
    ApiUtil.fetchVacations()
        .then(vacation => dispatch({ type: RECEIVE_VACATIONS, vacations }))
)

export const fetchVacation = (id) => dispatch => (
    ApiUtil.fetchVacation(id)
        .then(vacation => dispatch({ type: RECEIVE_VACATION, vacation }))
)

export const createVacation = vacation => dispatch => (
    ApiUtil.createVacation(vacation)
        .then(vacation => dispatch({ type: RECEIVE_VACATION, vacation }))
)

export const updateVacation = vacation => dispatch => (
    ApiUtil.updateVacation(vacation)
        .then(vacation => dispatch({ type: RECEIVE_VACATION, vacation }))
)

export const deleteVacation = (id) => dispatch => (
    ApiUtil.deleteVacation(id)
        .then(vacation => dispatch({ type: REMOVE_VACATION, vacation }))
)