

import url from "url";

exports.getQuery = (search)=>{
   return  url.parse(search,true).query;
}   