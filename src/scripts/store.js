


/**
 * 1.store..就是保存数据的地方，你可以把它看成一个容器，整个应用只有一个store
 * 2.Redux提供了createStore这个函数，用来生成store；
 * 
 * const store=createStore（fn）   fn====>reducers，将reducers作为参数传过来，
*/


import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";

/**
 * 这一步将reducers里面的数据注入到store里面去；
 * applyMiddleware:设置中间件，进行ajax请求数据
 * */ 
const store = createStore(reducers,applyMiddleware(thunk,promise));

/**
 * Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。state = store.getState()
 * */ 
//const state=store.getState();//这个函数一般在组件去获取，这样就可以得到里面的 值了

export default store ;
