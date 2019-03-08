
import React,{Component} from "react";
import "./index.scss";

import {getBanner,
        getGoodsClass
} from "../../actions"
import {
    NavBar,
    Icon,
    Carousel,
    WingBlank,
    WhiteSpace ,
    Toast,
    Popover,
    Tabs,
    NoticeBar 
} from "antd-mobile";

import GoodList from "../../component/goodList"
import {connect} from "react-redux";
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;



@connect(
    state=>({...state})
)

/**
 * 
 *  @connect 类装饰器 class 只能写在 class 前面  装饰 后面的 class 
  把 mapStateToProps 当做数据  载入  组件内 
 * 
 * */ 


export default class Home extends Component {

    componentWillMount(){
        Toast.loading('加载中...',1);
        let {dispatch}=this.props;
        dispatch(getBanner("/banner",4))
        dispatch(getGoodsClass("/getGoodsClass",10))
        Toast.info('加载完成', 1);
        
    }
 
    render(){
        let {home,dispatch}=this.props;
  
        let newdata=[];
        
        if(home.data){
            newdata=home.data
        }
        let goodsList=home.list
        return (
            <div>
                <header>
                    {/* 头部 */}
                        <NavBar
                        mode="dark"
                        leftContent="Menu"
                        onLeftClick={()=>console.log("123")}
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
                        蘑菇街
                        </NavBar>
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
                        >
                        {
                            newdata.map(val => (
                            <a
                            key={val}
                            href="javascipt:;"
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
                <WhiteSpace size="sm" />  
                {/* 分类列表 */}
                <Tabs tabs={home.tabs} 
                        initialPage={0} 
                        animated={false} 
                        useOnPan={false}  
                        onTabClick={
                            (tab, index) => {
                                    dispatch(getGoodsClass("/getGoodsClass",tab.skip))
                                 }
                           
                        }
                >
                    {
                        <GoodList goodsList={goodsList} animate={"animated flash"}/>        
                    }
                </Tabs>
            </div>
        )
    }
}
