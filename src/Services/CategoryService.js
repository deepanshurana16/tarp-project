import { myAxios } from "./Helper";


export const loadAllCategory = ()=>{
    return myAxios.get("/category/post").then((response)=>{
        return response.data;
    })
}