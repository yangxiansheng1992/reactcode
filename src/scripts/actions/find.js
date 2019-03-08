

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3100/react"

export const SEACHGOODS="SEACHGOODS";
export const seachGoods = (url,txt)=>{
    
    return axios.post(url,{txt}).then(({data})=>{
        return {
            type:SEACHGOODS,
            data:data.result
        }
    })
}



