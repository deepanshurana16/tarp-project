import { myAxios } from "./Helper";


export const loadAllBlocks = ()=>{
    return myAxios.get("/block/post").then((response)=>{
        return response.data;
    })
}