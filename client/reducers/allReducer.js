import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Users Reducer
 * @desc Handles Authentication Action
 * @param {object} state the user information
 * @param {function} action the action to check
 * @returns {any} any
 */
export default function all(state = initialState.all, action) {
  switch (action.type) {

    case types.GET_ALL_USERS:
      return Object.assign(
        {},
        state,
        { users: action.users }
      );

    case types.GET_ALL_ROLES:
      return Object.assign(
        {},
        state,
        { roles: action.roles }
      );

    case types.DELETE_EXISTING_USER: {
      const filteredUsers = state.users.filter(
        user => user.id !== parseInt(action.id, 10)
      );
      return Object.assign(
        {},
        state,
        {
          users: filteredUsers
        }
      );
    }

    case types.SEARCH_FOR_DOCUMENTS: {
      return Object.assign(
        {},
        state,
        {
          search: action.documents
        }
      );
    }

    case types.SEARCH_FOR_USERS: {
      return Object.assign(
        {},
        state,
        {
          search: action.users
        }
      );
    }

    case types.SET_PAGINATION: {
      return Object.assign(
        {},
        state,
        {
          pagination: action.pagination
        }
      );
    }

    default:
      return state;
  }
}
