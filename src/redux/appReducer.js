import React from 'react'
import { init } from './init'


export const appReducer = (state=init,action) => {
  switch(action.type){
    case "UPDATE_PHOTOS":
        return{
       ...state,photos:action.payload
    }
  }
  return state;
}

export default appReducer
