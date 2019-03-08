
import React ,{Component} from "react";//调用react核心api

import Layout from "../views/layout";
import Guide from "../views/guide";
import {Switch,Route,Redirect} from "react-router-dom";
import ShopCar from "../views/shopCar";
import GoodsData  from "../component/goodsData";

 export default class App extends Component{
    render (){
        return (
                <Switch>
                    <Route path="/" component={Guide} exact/>
                    <Route path="/shopCar" component={ShopCar} exact/>
                    <Route path="/layout" component={Layout}/>
                    <Route path="/goodsData/:id?" component={GoodsData}/>
                   
                    <Route render={
                        ()=>(
                            <Redirect to="/layout/home" />
                        )
                    }/>
                </Switch>
        )
    }
}

