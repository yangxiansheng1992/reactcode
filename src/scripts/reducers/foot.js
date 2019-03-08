

const defaultState={
    selectedTab: 'homeTab',
    foots:[
        {txt:"首页",path:"/layout/home",tab:"homeTab",icon_on:"icon-home1"},
        {txt:"商城",path:"/layout/classify",tab:"classifyTab",icon_on:"icon-goods"},
        {txt:"发现",path:"/layout/find",tab:"shopCarTab",icon_on:"icon-gouwuche"},
        {txt:"我",path:"/layout/my",tab:"myTab",icon_on:"icon-my1"},
    ]
}

export default (state=defaultState,action)=>{
    switch (action.type){
        default :
        return state;
        break;
    }
}
