import * as type from "../Constants"

const initialState ={
    username:"Redux-Demo",
    courseName:"Redux-ReactJs",
};
const rootReducer = (state = initialState,action)=>{
    switch(action.type){
        case type.CHANGE_USERNAME:
            return{
                ...state,
                username:action.data,
            };
        case type.CHANGECOURSENAME:
            return{
                ...state,
                courseName:action.data,
            };
        default:
            return state;
    }
};
export default rootReducer;