import React, {Component} from "react";
import "./index.scss"
import {connect} from "react-redux";
import {NavLink} from "react-router-dom"

@connect(
    state=>({...state})
)

export default class Foot extends Component{
 
    render(){
       let {foot} =this.props;
        return (
            <footer>
                 {
                    foot.foots.map((foot,index)=>{
                        return (
                            <div key={index}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={'iconfont ' + foot.icon_on}></i>
                                    <span>{foot.txt}</span>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
           
        )
    }
}