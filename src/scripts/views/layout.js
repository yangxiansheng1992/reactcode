import React,{Component} from "react";
import Home from "./home";
import Classify from "./classify";
import My from "./my";
import Find from "./find";
import Foot from "../component/foot"

import {Switch,Route} from "react-router-dom";


export default class Layout extends Component{
    render(){
        return (
            <div>
                <div>   
                    <Switch>
                        <Route path="/layout" component={Home} exact/>
                        <Route path="/layout/home" component={Home}/>
                        <Route path="/layout/classify" component={Classify}/>
                        <Route path="/layout/find" component={Find}/>
                        <Route path="/layout/my" component={My}/>
                    </Switch>
                </div>
                <Foot  {...this.props} /> 
            </div>
        )
    }
}

/*
exact:这是让switch精确匹配

*/