

import {SHOPCAR ,GETLIST } from "../actions";
const defaultState={
    car:[],
    list:[]
}

export default (state=defaultState,action)=>{
    switch (action.type){
        case SHOPCAR:
        return {...state,...{car:action.data}};
        break;
        case GETLIST:
        return {...state,...{list:action.data}};
        break;
        default :
        return state;
        break;
    }
}
