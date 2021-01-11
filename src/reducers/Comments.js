import {SAVE_REVIEW} from '../actions/Types'

export default function (state=[],action){
    switch(action.type){
        case SAVE_REVIEW:
            return [...state,action.payload]
      default:
          return state;  
    }
}