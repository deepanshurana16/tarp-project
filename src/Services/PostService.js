import { myAxios } from "./Helper"



export const createIssue = (postData , categoryId , blockId)=>{
       return myAxios.post(`/category/${categoryId}/block/${blockId}/post` , postData).then((response)=>{
        return response.data;
       })
}