import * as types from './actiontypes';

export function Scanned(lastname,firstname,height,dob,state,street,eye) {
    return {
      type: types.SCANNED, 
      lastname:lastname,
      firstname:firstname,
      height:height,
      dob:dob,
      state:state,
      street:street,
      eye:eye

    };
  }

  export function Saved(response)
  {
      return{
          type:types.SAVED,
          response:response
      }
  }
  
  