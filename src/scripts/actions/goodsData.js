








import axios from "axios";
axios.defaults.baseURL = "http://localhost:3100/react"

export const GETGOODSDATA="GETGOODSDATA";
export const getGoodsData = (url,_id)=>{

    return axios.get(url,{
        params:{
            _id
        }
    }).then(({data})=>{
        return {
            type:GETGOODSDATA,
            data:data.result
        }
    })
}
export const GETGOODSLIST="GETGOODSLIST";
export const getGoodsList = (url)=>{

    return axios.get(url).then(({data})=>{
        return {
            type:GETGOODSLIST,
            data:data.result
        }
    })
}



