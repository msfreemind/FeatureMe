import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, FLUSH_ERRORS } from '../actions/session_actions';

const _initialState = [];

const sessionErrorsReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
    case FLUSH_ERRORS:
      return _initialState;
  
    default:
      return state;
  }
};

export default sessionErrorsReducer;