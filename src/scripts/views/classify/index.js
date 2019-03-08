
import React,{Component} from "react";
import "./index.scss";
import {Link} from "react-router-dom";
import GoodsList from "../../component/goodList"
import {NoticeBar,WingBlank ,
         Carousel,SearchBar,
        Toast,WhiteSpace,
        PullToRefresh,
        Icon
} from "antd-mobile"

import {connect} from "react-redux";
import {
    getClassify,
    } from "../../actions"




@connect(
    state=>({...state})
)
export default class Classify extends Component {


    componentWillMount(){
        Toast.loading('加载中...',1);
        let {dispatch}=this.props;
        dispatch(getClassify("/getGoodsList"))
        Toast.info('加载完成', 1);

    }

    render(){
        let  banner=[]
        let  classClothes=[]
        let  goodsList=[]
        let {classify}= this.props
        if(classify.data.length){
            banner=classify.data.slice(5,8)
            classClothes=classify.data.slice(12,16)
            goodsList=classify.data.slice(16)
        }

        return (
            <div>
                {/* 头部搜索 */}
                <header className="classify-head">

                    <div className="head-left">
                        <Link to="/goodsClass">
                            <WingBlank size="sm">
                                <Icon type="down" size="lg" />
                            </WingBlank>
                        </Link>
                    </div>
                    <div className="head-right">
                        <SearchBar placeholder="search" ref={ref => this.autoFocusInst = ref} />
                    </div>
                </header>

                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                </NoticeBar>

                {/* banner图 */}
                <banner>
                    <WingBlank>
                        <Carousel
                        autoplay={true}
                        infinite={true}
                        autoplayInterval='1500'
                        // beforeChange={(from, to) => console.log("123")}
                        // afterChange={index => console.log("456")}
                        >
                        {
                            banner.map(val => (
                            <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%',height:'200px'}}
                            >
                            <img
                            src={val.img}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' ,height:"200px"}}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            }}
                            />
                            </a>
                            ))
                        }
                        </Carousel>
                    </WingBlank>   
                </banner>

                <WhiteSpace size="sm" />  
                {/* 衣服分类 */}
                <div className="classClothes">
                    <ul>
                      { classClothes.map((item,index)=>{
                           return (
                               <li key={index}>
                                   <div className="imgbox animated flash">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <p>
                                        {item.type.text}
                                    </p>
                               </li>
                           )
                       })}
                    </ul>
                </div>
                <WhiteSpace size="sm" />
                <WhiteSpace size="sm" />
                <WhiteSpace size="sm" />
                {/* 详细分类 */}
                <div className="classIconfont"> 
                    <ul>
                        {
                            classify.icon.map((ifont,index)=>{
                                return(
                                    <li key={index}  
                                        onClick={
                                            ()=>{
                                                Toast.loading('功能不完善，请后续关注...',1.5);
                                            }
                                        }
                                        className="animated swing"
                                    >
                                        <i className={"iconfont "+ifont.incon }></i>
                                        <span>
                                            {ifont.title}
                                        </span>
                                    </li>
                                )
                            })                             
                        }
                    </ul>
                </div>
                <WhiteSpace size="sm" />
                {/* 列表刷新 */}
                <GoodsList goodsList={goodsList} animate={"animated wobble"}/>
            </div>
        )
    }
}