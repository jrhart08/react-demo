import { GET_PEOPLE_SUCCESS } from '../actions/types';

const initialState = {
  people: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return { ...state, people: action.people };
    default:
      return state;
  }
}