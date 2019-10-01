import * as ApiUtil from '../utils/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const fetchUsers = () => dispatch => (
    ApiUtil.fetchUsers()
        .then(users => dispatch({ type: RECEIVE_USERS, users: users }))
)

export const fetchUser = (id) => dispatch => (
    ApiUtil.fetchUser(id)
        .then(user => dispatch({ type: RECEIVE_USER, user }))
)

export const createUser = user => dispatch => (
    ApiUtil.createUser(user)
        .then(user => dispatch({ type: RECEIVE_USER, user }))
)

export const updateUser = user => dispatch => (
    ApiUtil.updateUser(user)
        .then(user => dispatch({ type: RECEIVE_USER, user }))
)

export const deleteUser = (id) => dispatch => (
    ApiUtil.deleteUser(id)
        .then(user => dispatch({ type: REMOVE_USER, user }))
)