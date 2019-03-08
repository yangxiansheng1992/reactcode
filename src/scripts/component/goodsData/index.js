
import "./index.scss";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import { WingBlank, WhiteSpace,PullToRefresh,Toast,NavBar,Badge ,Button, ActionSheet,
    Icon ,NoticeBar,Popover ,Carousel} from "antd-mobile";
import {getGoodsData,getGoodsList} from "../../actions";
import GoodsList from "../goodList"

import {connect} from "react-redux";
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const Item = Popover.Item;
const dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));

@connect(
    state=>({...state})
)
export default class GoodsData extends Component{


    componentWillMount(){
        Toast.loading('加载中...',1);
        let {dispatch,match}=this.props;
        let _id=match.params.id
        dispatch(getGoodsData("/goodsData", _id))
        dispatch(getGoodsList("/getGoodsList"))
        Toast.info('加载完成', 1);
        
    }

    render(){
        let {goodsData,history} = this.props;
        let goodsList=[]//商品列表
        let myDataImgs = [];//商品图片
        let goods={}//商品信息
        if(goodsData.goodsData.length>0){
            myDataImgs=goodsData.goodsData[0].banner
            goods=goodsData.goodsData[0]
            goodsList=goodsData.list;
        }
        return (
           <div>
                {/* 头部 */}
            <header>
                <NavBar
                mode="dark"
                leftContent={<Icon type="left" />}
                onLeftClick={
                    ()=>history.go(-1)
                }
                rightContent={[
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        overlay={[
                            (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                            (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>二维码</Item>),
                            (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>),
                        ]}
                        align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                        }}
              
                    >
                        <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                  </Popover>
                ]}
                >
                    商品详情
                </NavBar>
            </header>
            <WhiteSpace size="sm" />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        祝您购物愉快，天天好心情
                </NoticeBar>

                {/* 商品详情 */}
                <WhiteSpace size="sm" />
                    <div className="goods-detail">
                        <Carousel
                        autoplay={true}
                        infinite={true}
                        autoplayInterval='1500'
                        >
                        {
                            myDataImgs.map((val,index) => (
                            <a
                            key={index}
                            href="javascript:;"
                            style={{ display: 'inline-block', width: '100%',height:'200px'}}
                            >
                            <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' ,height:"200px"}}
                         
                            />
                            </a>
                            ))
                        }
                        </Carousel>
                        <div className="goods-box">                         
                            <p className="goods-name"> 
                                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                                    {goods.name}
                                </NoticeBar>                                                                                 
                            </p>
                            <WhiteSpace size="sm" />
                            <WhiteSpace size="sm" />
                            <div className="goods-price">
                                <span className="goods-left">
                                    <span>现在只需：￥</span>
                                    <span>
                                        {goods.price}
                                    </span>
                                </span>
                                <del className="goods-middle">
                                    <span>￥</span>
                                    <span>
                                        {
                                            parseFloat(goods.price/goods.discount*10).toFixed(2)
                                        }
                                    </span>
                                </del>
                                <div className="goods-discount">
                                 
                                  <Badge text={goods.discount+"折"} corner>
                                        <div className="corner-badge"> 活动折扣</div>
                                    </Badge>
                                </div>
                            </div>
                            <h3 className="detail">
                                    {goods.detail}   
                            </h3>
                            <div className="goods-type">
                                库存：
                                <span>
                                    {goods.stock}
                                </span>
                                件
                            </div>
                        </div>
                        <div className="btn">
                            <div className="btn-left">
                                <Button type="warning"  onClick={
                                   ()=>{
                                    ActionSheet.showShareActionSheetWithOptions({
                                        options: dataList,
                                      })
                                   }
                                }>
                                    分享
                                </Button>
                            </div>
                            <div className="btn-center" onClick={
                                ()=>{
                                    console.log(123)
                                }
                            }>
                                    <Button type="primary" >加入购物车</Button>
                            </div>
                            <div className="btn-right">
                                <a href="#/shopCar">
                                    <Button type="warning">进入购物车</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                <WhiteSpace size="sm" />
                
                <NoticeBar  icon={null} className="tuijian" >
                    推荐商品
                </NoticeBar>
                <WhiteSpace size="sm" />   
                {/* 商品列表 */}
                <GoodsList goodsList={goodsList}/>
           </div>
        )
    }
}

