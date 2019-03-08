
import React from "react"
import ReactDOM , {render} from "react-dom";
import App from  "./app";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";//通过provider向子组件传递数据
import store from "./store";//将数据store挂载在provider上

const hotRender = ()=>{

    render(
        <Provider store={store}>
            <HashRouter basename="">
                <App/>
            </HashRouter>
        </Provider>,
        document.getElementById("app")
    )
}

hotRender();
