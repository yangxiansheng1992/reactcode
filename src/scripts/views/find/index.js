import { NavBar, Icon ,Popover,WhiteSpace,SearchBar,Grid ,Badge ,Toast} from 'antd-mobile';
import React,{Component} from "react";
import {seachGoods} from "../../actions";
import GoodList from "../../component/goodList";
import { connect } from "react-redux";
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const Item = Popover.Item;




@connect(
    state=>({...state})
)
export default class ShopCar extends Component {
    componentWillMount(){
        Toast.loading('加载中...',1);
        let {dispatch}=this.props;
        dispatch(seachGoods("/seachGoods","衬衫"))
        Toast.info('加载完成', 1);
    }

    debounce=(method,delay) =>{//防抖函数
        let timer = null;
        return function () {
            let self = this,
                args = arguments;
            timer && clearTimeout(timer);
            timer = setTimeout(function () {
                method.apply(self,args);
            },delay);
        }
    }


    render(){
       let {find,dispatch}=this.props;
        let goodsList=find.list;
       
       let icon=find.icon

        return (
            <div>
                <header className="header">
                    {/* 搜索框 */}
                    <NavBar
                        mode="light"
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
                    发现
                    </NavBar>
                    <WhiteSpace size="sm" />  
                    <SearchBar placeholder="搜索下面各类" 
                        onSubmit={
                            this.debounce(
                                (value)=>{
                                    dispatch(seachGoods("/seachGoods",value))
                                    if(goodsList.length<1){
                                        Toast.loading('搜索类别不存在...',1);
                                    }
                                },500)
                        }                  
                        onChange={
                            this.debounce(
                                (value)=>{
                                    dispatch(seachGoods("/seachGoods",value))
                                    if(goodsList.length<1){
                                        Toast.loading('搜索类别不存在...',1);
                                    }
                                },500)
                        }
                    />
                </header>
                    {/* 搜索类别 */}
                <div>
                 <Grid data={icon} 
                    activeStyle={false} 
                    columnNum={4} 
                    itemStyle={{
                        borderRadius:"10"
                    }}
                />
                </div>
                    {/* 默认显示的数据 */}
                    
                    <GoodList goodsList={goodsList} animate={"animated shake"}/>

            </div>
        )
    }
}