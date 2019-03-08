
import React,{Component} from "react";
import {NavLink} from 'react-router-dom';

import {GETBANNER,
        GETGOODSCLASS
} from "../actions"

const defaultState={
    data:[],
    tabs :[
        { title: <NavLink to="/layout/home/find">发现</NavLink>,skip:15},
        { title: <NavLink to="/layout/home/gz">关注</NavLink>,skip:30},
        { title:  <NavLink to="/layout/home/liuxing">流行</NavLink>,skip:40},
      ],
      list:[]
}
export default (state=defaultState,action)=>{
        switch(action.type){

            case GETBANNER:
            return {...state,...{data:action.data}}
            break;
            case GETGOODSCLASS:
            return {...state,...{list:action.data}}
            break;
            default:
            return state;
            break;
        }
}


// tabs :[
//     { title: <Badge text={'3'} onClick={()=>{console.log(123)}}>发现</Badge> ,skip:15},
//     { title: <Badge text={'今日(20)'} onClick={()=>{console.log(123)}>关注</Badge> ,skip:30},
//     { title: <Badge dot onClick={()=>{console.log(123)}>流行</Badge> ,skip:40},
//   ],