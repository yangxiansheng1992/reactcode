/**
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer

Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。    2个参数 action state 

Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法

reateStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State
 */ 

import {combineReducers} from "redux";    
import foot from "./foot";
import guide from "./guide";
import home from "./home";
import goodsData from "./goodsData";
import classify from "./classify";
import find from "./find";
import my from "./my";
import shopCar from "./shopCar"

const reducers = combineReducers({    // 合并reducers 
    foot,
    guide,
    home,
    goodsData,
    classify,
    find,
    my,
    shopCar
})

export default reducers