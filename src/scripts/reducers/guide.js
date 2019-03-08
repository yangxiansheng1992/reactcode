
const defaultState={
    imgs:[
        require("../../assets/imgs/slide1.png"),
        require("../../assets/imgs/slide2.png"),
        require("../../assets/imgs/slide3.png"),
        require("../../assets/imgs/slide4.png"),
    ]
}
export default (state=defaultState,action)=>{
        switch(action.type){
            
            default:
            return state;
            break;
        }
}


