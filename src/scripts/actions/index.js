
/**
 * State 的变化，会导致 View 的变化,用户接触不到 State，只能接触到 View,State 的变化必须是 View 导致的.
Action 就是 View 发出的通知，表示 State 应该要发生变化 
Action 是一个对象。其中的type属性是必须的，表示 Action 的名称  , 其他属性就是一个参数  默认只能传一个参数 如果多个参数 传 对象 

 * views发送一个通知，要stae发生变化，actions就发送一个描述对象，通知state变化
 * 
 * 
 * 其他页面的数据，由这里导出，需要导出相对应的函数名和类型（function，type）
 * */ 

export {GETBANNER ,getBanner,
    GETGOODSCLASS,getGoodsClass,
} from "./home";


export {
 GETCLASSIFY,getClassify
}from "./classify"

export {
    GETGOODSDATA,getGoodsData,
    GETGOODSLIST,getGoodsList
}from "./goodsData"

export {
    SEACHGOODS,seachGoods
} from "./find"

export {
    GETUSER,getUser,
    TOLOGIN,toLogin
} from "./my";

export {
    SHOPCAR,shopCar,
    GETLIST,getList
} from "./shopCar";
