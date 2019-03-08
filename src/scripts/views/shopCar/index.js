
import React ,{Component} from "react";
import "./index.scss";
import {shopCar,getList} from "../../actions";
import GoodList from "../../component/goodList";
import {
    NavBar,
    Icon,
    WhiteSpace ,
    Toast,
    Popover,
    List,
    Modal,
    NoticeBar
} from "antd-mobile";
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const ItemList = List.Item;
const prompt = Modal.prompt;


import {connect} from "react-redux";
@connect(
    state=>({...state})
)
export default class GoodsClass extends Component{
    
    componentWillMount(){
        let {dispatch,history}=this.props;
        dispatch(getList("/getGoodsList"))       
        let username=localStorage.username;
        if(username){//有用户名就获取数据
            dispatch(shopCar("/userShopCar",username));

        }else{//没有就提示没有登录
            Toast.loading('您还没有登录，请登录...',1.5);
            setTimeout(()=>{
                history.go(-1)
            },1500)
        }
    }

    render(){
        let {shopCar} =this.props;
        console.log(shopCar)
        let car=[]
        if(shopCar.car.length>0){
            car=shopCar.car;
        }
        let {history} =this.props;
      
        return (
            <div>
                   <header>
                {/* 头部 */}
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
                        购物车
                    </NavBar>
                </header>
                <WhiteSpace/>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                      亲爱的用户，祝您购物愉快！！！
                </NoticeBar>
                <WhiteSpace/>
                <div className="shop-car">
                    <div className="shop-head">
                        <List  className="my-list">
                            <ItemList extra={ <Icon type={"right"} />}>
                                请核对购物车信息
                            </ItemList>
                        </List>
                    </div>
                    <div className="shop-main">
                      {
                            car.map((item,index)=>{
                                return(
                                    <ul key={index}>
                                        <li>
                                            <input type="checkbox"/>
                                        </li>
                                        <li>图片</li>
                                        <li>
                                            <div className="shop-name">

                                            </div>
                                            <div className="shop-info">
                                                <div className="info-left">
                                                    <span>￥</span><span></span>
                                                </div>
                                                <ul className="info-right">                                         
                                                        <li className="right-left">-</li>
                                                        <li className="right-center">1</li>
                                                        <li className="right-right">+</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            })
                      }
                    </div>
                    <div className="shop-foot">
                        <ul>
                            <li>
                                <span>￥</span><span></span>
                            </li>
                            <li>
                                <span>￥</span><span></span>
                            </li>
                            <li>
                                <button>结算</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <GoodList goodsList={goodsList} animate={"animated flash"}/> */}
            </div>
        )
    }
}




