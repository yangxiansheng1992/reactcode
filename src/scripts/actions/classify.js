






import axios from "axios";
axios.defaults.baseURL = "http://localhost:3100/react"

export const GETCLASSIFY="GETCLASSIFY";
export const getClassify = (url,limit)=>{

    return axios.get(url,{
        params:{
            limit
        }
    }).then(({data})=>{
      
        return {
            type:GETCLASSIFY,
            data:data.result.reverse()
        }
    })
}



