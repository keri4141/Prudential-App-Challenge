import * as types from '../actions/actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  lastname: '',
  firstname: undefined,
  height: undefined,
  dob: undefined,
  state:undefined,
  city:undefined,
  street:undefined,
  eye:undefined,
  sex: undefined,
  response:undefined
});

//root reducer
export function info(state = initialState, action = {}) {

  switch (action.type) {
    
    case types.SCANNED:
      return state.merge({
        lastname: action.lastname,
        firstname: action.firstname,
        height: action.height,
        dob: action.dob,
        state: action.state,
        street:action.street,
        eye: action.eye

      });

    case types.SAVED:
      return state.merge({
          response:action.response
      })
     
    default:
      return state;
  }
}
