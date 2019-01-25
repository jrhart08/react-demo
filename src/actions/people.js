import { getPeople as getPeopleApi } from '../api/people';
import * as actionTypes from './types';

const getPeopleSuccess = people => ({
  type: actionTypes.GET_PEOPLE_SUCCESS,
  people,
});

export const getPeople = () => async (dispatch) => {
  const people = await getPeopleApi();

  return dispatch(getPeopleSuccess(people));
  // return getPeople().then(people => {
  //   dispatch(getPeopleSuccess(people));
  // });
};

