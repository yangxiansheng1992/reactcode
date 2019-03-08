
import {Badge} from "antd-mobile";
import React from "react";
import {GETCLASSIFY} from "../actions";

const defaultState={
    data:[],
    icon:[
       
        {title:<Badge text="HOT" hot >女装</Badge>,incon:"icon-nvzhuang"},
        {title:<Badge text="HOT" hot >衬衫</Badge>,incon:"icon-chenshan"},
        {title:<Badge text="HOT" hot >裙子</Badge>,incon:"icon-qunzi"},
        {title:<Badge text="HOT" hot >鞋子</Badge>,incon:"icon-huabanxie"},
        {title:<Badge text="减" hot >裤子</Badge>,incon:"icon-kuzi"},
        {title:<Badge text="惠" hot >运动鞋</Badge>,incon:"icon-xiezi1"},
        {title:<Badge text="免" hot >长衬衫</Badge>,incon:"icon-chenshan3"},
        {title:<Badge text="返" hot >男衬衫</Badge>,incon:"icon-chenshan2"},
        {title:<Badge text="劵" hot >套装</Badge>,incon:"icon-taozhuang"},
        {title:<Badge text="NEW" hot >美妆</Badge>,incon:"icon-meizhuang1"},
        {title:<Badge text={'促'} hot >唇彩</Badge>,incon:"icon-meizhuang"},
    ]
}
export default (state=defaultState,action)=>{
        switch(action.type){
            case GETCLASSIFY:
            return {...state,...{data:action.data}}
            break;
            default:
            return state;
            break;
        }
}


