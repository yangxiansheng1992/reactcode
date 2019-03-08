
import {Badge} from "antd-mobile"
import React,{Component} from "react";
import {SEACHGOODS} from "../actions";

const defaultState={
    icon:[
        {text:<Badge text="女礼服" hot ></Badge>,icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543753431752&di=038934ad5168b0ac7ce347da03311f0e&imgtype=0&src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fcommodity_story%2Fmlarge%2Fpublic%2Fp7695539.jpg"},
        {text:<Badge text="衬衫" hot ></Badge>,icon:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543743263&di=14809dbe154419e67d624d072d97d97e&src=http://pic.58pic.com/58pic/12/27/50/458PIC458PICnyb.jpg"},
        {text:<Badge text="西服" hot ></Badge>,icon:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1684563122,1517885293&fm=26&gp=0.jpg"},
        {text:<Badge text="婚纱" hot ></Badge>,icon:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1292656814,2204126728&fm=26&gp=0.jpg"},
        {text:<Badge text="裤子" hot ></Badge>,icon:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=180584559,1332455450&fm=26&gp=0.jpg"},
        {text:<Badge text="T恤" hot ></Badge>,icon:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2385222227,2824640690&fm=26&gp=0.jpg"},
        
    ],
    list:[]
}
export default (state=defaultState,action)=>{
        switch(action.type){
            case SEACHGOODS:
            return {...state,...{list:action.data}}
            break;
            default:
            return state;
            break;
        }
}


