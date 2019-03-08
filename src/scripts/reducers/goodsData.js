
import {
    GETGOODSDATA,
    GETGOODSLIST
} from "../actions"

const defaultState={
    refreshing:false,
    goodsData:[],
    list:[]

}

export default (state=defaultState,action)=>{
    switch (action.type){
        case GETGOODSDATA:
        return {...state,...{goodsData:action.data}};
        break;
        case GETGOODSLIST:
        return {...state,...{list:action.data}}
        break;
        default :
        return state;
        break;
    }
}
