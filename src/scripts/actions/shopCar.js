
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3100/react"

export const SHOPCAR="SHOPCAR";
export const shopCar = (url,tel)=>{
    
    return axios.post(url,{tel}).then(({data})=>{
        return {
            type:SHOPCAR,
            data:data.result
        }
    })
}
export const GETLIST="GETLIST";
export const getList = (url)=>{
    
    return axios.post(url).then(({data})=>{
        return {
            type:GETLIST,
            data:data.result
        }
    })
}



