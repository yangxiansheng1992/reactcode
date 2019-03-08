import {GETUSER,TOLOGIN} from "../actions";


const defaultState={
    icon:[
        {txt:"我的关注",icon:"icon-follow",color:"pink"},
        {txt:"钱包",icon:"icon-qianbao",color:"yellow"},
        {txt:"蘑菇币商城",icon:"icon-shangcheng",color:"blue"},
        {txt:"足迹",icon:"icon-zuji",color:"green"},
    ],
    text:[
        {txt:"我的消息"},
        {txt:"联系客服"},
        {txt:"意见反馈"},
        {txt:"版本信息"}
    ],
    user:""

}

export default (state=defaultState,action)=>{
    switch (action.type){
        case GETUSER:
        return {...state,...{user:action.user}}
        break;
        case TOLOGIN:
        return {...state,...{user:action.data}}
        break;
        default :
        return state;
        break;
    }
}
