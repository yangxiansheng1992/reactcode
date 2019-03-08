
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3100/react"

export const GETUSER="GETUSER";
export const getUser = (user)=>{
    return {
        type:GETUSER,
        user
    }
}
export const TOLOGIN="TOLOGIN";
export const toLogin = (url,tel,userpwd)=>{
    return axios.post(url,{tel,userpwd}).then(({data})=>{
        if(data.code==200){
            localStorage.username=tel
            return {
                        type:TOLOGIN,
                        data:tel
                    }
        }else{
            localStorage.username=''
            return {
                type:TOLOGIN,
                data:''
            }
        }
    })
}









