

import React ,{Component} from "react";
import {PullToRefresh,Toast} from "antd-mobile";
import {Link} from "react-router-dom"


export default class GoodsList extends Component {

    render(){
        let {goodsList,animate}=this.props
        return (
            <div className="goods-list box">
                    {/* 刷新 */}
                    <PullToRefresh
                    damping={60}
                    style={{
                    overflow: 'auto',
                    }}
                    direction={'down'}
                    onRefresh={() => {
                        Toast.loading('加载中...',1);

                        goodsList= goodsList.reverse();

                        setTimeout(() => {                            
                            Toast.info('加载完成', 1);
                        }, 1000);
                    }}
                >
                    {/* 列表内容 */}
                    <ul>
                        { goodsList.map((goods,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={"/goodsData/" + goods._id} onClick={
                                           ()=>history.go(0)
                                        }>
                                            <div className="img-box">
                                                <img src={goods.img} alt="" className={animate}/>
                                            </div>
                                            <h3>
                                                <p className="name">                                       
                                                        {goods.name}                                               
                                                </p>
                                                <div className="price">
                                                    <span className="price-left">
                                                        <span>￥</span>
                                                        <span>
                                                            {goods.price}
                                                        </span>
                                                    </span>
                                                    <del className="price-right">
                                                        <span>￥</span>
                                                        <span>
                                                            {
                                                                parseFloat(goods.price/goods.discount*10).toFixed(2)
                                                            }
                                                        </span>
                                                    </del>
                                                </div>
                                            </h3> 
                                        </Link>                                     
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </PullToRefresh>  
                </div>
        )
    }
}