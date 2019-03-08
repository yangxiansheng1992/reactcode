import {
    NavBar,
    Icon,
    WhiteSpace ,
    Toast,
    Popover,
    List,
    Modal
} from "antd-mobile";
import "./index.scss";
import React,{Component} from "react";
import axios from "axios";
import {getUser,toLogin} from "../../actions";

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const ItemList = List.Item;
const prompt = Modal.prompt;
axios.defaults.baseURL = "http://localhost:3100/react"


import {connect} from "react-redux";
@connect(
    state=>({...state})
)
export default class My extends Component {

    componentWillMount(){
        let {dispatch}=this.props;
        let username=localStorage.username;
        dispatch(getUser(username));
    }


    goLogin=(tel,userpwd)=>{
        let reg=/^1(3|5|7|8|9)[\d]{9}$/;
        let {dispatch} =this.props;
        if(reg.test(tel)){
            axios.post("",tel,userpwd)
            dispatch(toLogin("/getUser",tel,userpwd))
        }else{  
            Toast.offline('手机号格式不正确!!!', 2); 
        }

    }

    render(){
        let {my}=this.props;
        let username=my.user
        return (
            <div>
                <header>
                {/* 头部 */}
                    <NavBar
                    mode="dark"
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
                        个人中心
                    </NavBar>
                </header>
                    <WhiteSpace/>
                    <div className="show-name">
                        <div className="img-box">
                            <img src={require("../../../assets/imgs/douyin.jpg")} alt=""/>
                        </div>
                        <h1 className="user-name" onClick={
                           ()=>{
                                if(username){
                                    return false;
                                }else {
                                    prompt(
                                        '请登录',
                                        '没有账号，会被直接注册',
                                        (login, password) => {
                                            this.goLogin(login,password)
                                        },
                                        'login-password',
                                        null,
                                        ['请输入手机号', '请输入密码'],
                                      )
                                }   
                           }
                        }>
                            {
                              username?username:"请登录>"
                            }
                        </h1>
                    </div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <div className="user-icon">
                        {
                            my.icon.map((item,index)=>{
                                return (
                                    <div key={index} className="icons" onClick={
                                        ()=>{
                                            Toast.offline('功能不完善，去购物车看看吧 !!!', 2);
                                        }
                                    }>
                                            <i className={'iconfont ' + item.icon} style={{color:item.color}}></i>
                                            <span>{item.txt}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <List  className="my-list">
                        <ItemList extra={ <Icon type={"right"}/>}>
                               我的购物车
                        </ItemList>
                    </List>
                    <WhiteSpace/>
                    <div>
                        {
                            my.text.map((item,index)=>{
                                return(
                                    <div key={index} onClick={
                                        ()=>{
                                            Toast.offline('功能不完善，敬请关注 !!!', 2);
                                        }
                                    }>
                                        <WhiteSpace/>
                                    <List  className="my-list">
                                        <ItemList extra={ <Icon type={"right"} />}>
                                            {item.txt}
                                        </ItemList>
                                    </List>
                                    </div>     
                                )
                            })
                        }
                    </div> 
            </div>
        )
    }
}