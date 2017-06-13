import * as toastr from 'toastr';
import * as types from './actionTypes';
import api from './../utils/api';
import { LIMIT } from './../../constants';

/**
 * Get All Users
 * @desc Get all the users in the database
 * @param {array} users - list of all users
 * @returns {object} action
 */
export function getAllUsers(users) {
  return {
    type: types.GET_ALL_USERS,
    users
  };
}

/**
 * Get All Users
 * @desc Sets the current pagination
 * @param {array} pagination - list of all users
 * @returns {object} action
 */
export function setPagination(pagination) {
  return {
    type: types.SET_PAGINATION,
    pagination
  };
}

/**
 * Get Users
 * @desc View an existing document
 * @param {number} offset - the current page to load users
 * @returns {object} action
 */
export function getUsers(offset = 0) {
  const limit = LIMIT.USERS;
  return (dispatch) => {
    api.get(`/users/?limit=${limit}&offset=${offset}`).then((result) => {
      if (result.status === 200) {
        const users = result.data;
        dispatch(getAllUsers(users.data));
        dispatch(setPagination(users.pagination));
      } else {
        toastr.error(result.data.msg);
      }
    }).catch((error) => {
      if (error.response) {
        // if the server responded with a status code
        // that falls out of the range of 2xx
        toastr.error(error.response);
      } else {
        toastr.error(error);
      }
    });
  };
}

/**
 * Get All Roles
 * @desc Get all the roles in the database
 * @param {array} roles - list of all roles
 * @returns {object} action
 */
export function getAllRoles(roles) {
  return {
    type: types.GET_ALL_ROLES,
    roles
  };
}

/**
 * Get Roles
 * @desc View an existing document
 * @param {number} id document id
 * @returns {object} action
 */
export function getRoles() {
  return (dispatch) => {
    api.get('/roles').then((result) => {
      if (result.status === 200) {
        dispatch(getAllRoles(result.data));
      } else {
        toastr.error(result.data.msg);
      }
    }).catch((error) => {
      if (error.response) {
        // if the server responded with a status code
        // that falls out of the range of 2xx
        toastr.error(error.response);
      } else {
        toastr.error(error);
      }
    });
  };
}
