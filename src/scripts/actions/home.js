

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3100/react"

export const GETBANNER="GETBANNER";
export const getBanner = (url,limit)=>{

    return axios.get(url,{
        params:{
            limit
        }
    }).then(({data})=>{
      
        return {
            type:GETBANNER,
            data:data.result
        }
    })
}

export const GETGOODSCLASS="GETGOODSCLASS";
export const getGoodsClass = (url,skip)=>{
    
    return axios.post(url,{skip}).then(({data})=>{ 
        return {
            type:GETGOODSCLASS,
            data:data.result
        }
    })    
}


