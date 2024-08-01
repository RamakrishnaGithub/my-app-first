import { sagainit } from "./init"

export const sagaReducer=(state=sagainit,action)=>{
    switch(action.type){
        case "UPDATE_POSTS":
            return{
           ...state,photos:action.payload
        }
      }
      return state;
}