import * as type from '../Constants';
export const actChangeUserName = (value)=>{
    return{
        type:type.CHANGE_USERNAME,
        data:value
    }
}
export const actChangeCourseName = (value)=>{
    return{
        type:type.CHANGECOURSENAME,
        data:value
    }
}