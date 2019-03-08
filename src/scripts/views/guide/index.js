
import React,{Component} from "react";
import {connect} from "react-redux";
import {Carousel} from "antd-mobile"
@connect(
    state=>({...state})
)

export default class Guide extends Component {

    gotoApp = (index)=>{
        let {guide,history} =this.props;
        if(index==guide.imgs.length-1){
            history.push("/layout/home");
        }
    }
    componentWillMount(){
        let {history } = this.props;
        if(localStorage.viewCount>3){
            history.push("/app/");
            localStorage.viewCount++;
        }else{
            if(localStorage.viewCount){
                localStorage.viewCount++;
            }else{
                localStorage.viewCount = 1;
            }
        }

    }
    render(){
        let {guide} =this.props;
        return (
            <div className="box">
               <Carousel
               className="guide-carousel"
               style={{height:'100vh'}}
               dots={false}
              
               >
                   {
                       guide.imgs.map((img,index)=>{
                        return (
                            <img
                            key={index}
                            src={img}
                            onClick={()=>{
                                this.gotoApp(index)
                            }}
                            alt=""
                            className="guide-img"
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                        )
                       })
                   }
               </Carousel>
            </div>
        )
    }
}